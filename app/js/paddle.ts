import { GameContext } from './gamecontext';

interface IPaddleConfiguration {
    rightDown: boolean;
    leftDown: boolean;
    x: number;
    y: number;
    height: number;
    width: number;
    keyLeft: number;
    keyRight: number;
  }  

export class Paddle {
    public constructor(public context: GameContext, private player: number) {
      this.height = 10;
      this.x = 50;
        if (this.player === 1 ) {
          this.paddleConfig = {
            rightDown: false,
            leftDown: false,
            x: 50,
            height: 10,
            width:75,
            y: this.context.canvas.height - this.height,
            keyLeft: 37,
            keyRight: 39,
        };
        } else {
          this.paddleConfig = {
            rightDown: false,
            leftDown: false,
            x: 50,
            height: 10,
            width:75,
            y: 0,
            keyLeft: 65,
            keyRight: 68,
        }
      }
    }
    public height: number;
    public x: number;
    public paddleConfig: IPaddleConfiguration;
    public move(): void {
        if (this.paddleConfig.rightDown) {
            if (this.paddleConfig.x + this.paddleConfig.width + 5 <= this.context.canvas.width) {
                this.paddleConfig.x += 5;
            }
        } else if (this.paddleConfig.leftDown) {
            if (this.paddleConfig.x - 5 >= 0) {
                this.paddleConfig.x -= 5;
            }
        }
    }
    public draw(): void {
        this.context.ctx.beginPath();
        this.context.ctx.rect(
            this.paddleConfig.x,
            this.paddleConfig.y,
            this.paddleConfig.width,
            this.paddleConfig.height,
        );
        this.context.ctx.closePath();
        this.context.ctx.fill();
    }
    public onKeyEvent(event: KeyboardEvent, isDown: boolean): void {
        if (event.keyCode === this.paddleConfig.keyRight) {
            this.paddleConfig.rightDown = isDown;
        } else if (event.keyCode === this.paddleConfig.keyLeft) {
            this.paddleConfig.leftDown = isDown;
        }
    }
  }