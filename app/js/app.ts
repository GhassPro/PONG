import { Ball } from './ball';
import { GameContext } from './gamecontext';
import { Collision } from './collision';
import { Paddle } from './paddle';
import  $ from 'jquery';

$(document).ready( (): void => {
  const context: GameContext = new GameContext();
  const player1: Paddle = new Paddle(context, 1);
  const player2: Paddle = new Paddle(context, 2);
  const ball: Ball = new Ball(context);
  const collision: Collision = new Collision(context, ball, player1, player2);

  const onKeyDown = (evt: any): void => {
    if (evt.keyCode === 32) {
      ball.start();
    } else {
      player1.onKeyEvent(evt, true);
      player2.onKeyEvent(evt, true);
    }
  }

  const  onKeyUp = (evt: any): void => {
    player1.onKeyEvent(evt, false);
    player2.onKeyEvent(evt, false);
  }

  $(document).keydown(onKeyDown);
  $(document).keyup(onKeyUp);

  const draw = (): void => {
    context.clear();
    player1.move();
    player1.draw();
    player2.move();
    player2.draw();
    collision.bounceFromSides();
    collision.bounceFromPaddles();
    ball.move();
    ball.draw();
  }
  setInterval(draw, 10);

});