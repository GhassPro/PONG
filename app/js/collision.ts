import { GameContext } from './gamecontext';
import { Ball } from './ball';
import { Paddle } from './paddle';

export class Collision {
    public constructor(public context: GameContext, public ball: Ball, public player1: any, public player2: any) {}
    public player1Score = 0;
    public player2Score = 0;
    public bounceFromSides(): void {
        if (this.ball.getRightBoundary() > this.context.canvas.width || this.ball.getLeftBoundary() < 0) {
            this.ball.switchDirectionX();
        }
    }
    public collidesWithPaddle(paddle: Paddle): boolean {
        return (
            this.ball.x > paddle.paddleConfig.x &&
            this.ball.x < paddle.paddleConfig.x + paddle.paddleConfig.width
        );
    }
    public calculateRebounce(paddle: Paddle): number {
        return (
            8 *
            ((this.ball.x - (paddle.paddleConfig.x + paddle.paddleConfig.width / 2)) /
                paddle.paddleConfig.width)
        );
    }
    public bounceFromPaddles(): void {
        if (this.ball.getTopBoundary() < 0) {
            if (this.collidesWithPaddle(this.player2)) {
                this.ball.deltaX = this.calculateRebounce(this.player2);
                this.ball.switchDirectionY();
            } else {
                this.score('score_player1');
                this.ball.init();
            }
        } else if (this.ball.getBottomBoundary() > this.context.canvas.height) {
            if (this.collidesWithPaddle(this.player1)) {
                this.ball.deltaX = this.calculateRebounce(this.player1);
                this.ball.switchDirectionY();
            } else {
              this.score('score_player2');
  
                this.ball.init();
            }
        }
    }
    public score(id: string): void {
      const score: HTMLInputElement = document.getElementById(id) as HTMLInputElement;
      if(id === 'score_player1') {
        this.player1Score += 1;
        score.value = this.player1Score.toString();
      } else {
        this.player2Score += 1;
        score.value = this.player2Score.toString();
      }
    }
  }