"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Collision = /** @class */ (function () {
    function Collision(context, ball, player1, player2) {
        this.context = context;
        this.ball = ball;
        this.player1 = player1;
        this.player2 = player2;
        this.player1Score = 0;
        this.player2Score = 0;
    }
    Collision.prototype.bounceFromSides = function () {
        if (this.ball.getRightBoundary() > this.context.canvas.width || this.ball.getLeftBoundary() < 0) {
            this.ball.switchDirectionX();
        }
    };
    Collision.prototype.collidesWithPaddle = function (paddle) {
        return (this.ball.x > paddle.paddleConfig.x &&
            this.ball.x < paddle.paddleConfig.x + paddle.paddleConfig.width);
    };
    Collision.prototype.calculateRebounce = function (paddle) {
        return (8 *
            ((this.ball.x - (paddle.paddleConfig.x + paddle.paddleConfig.width / 2)) /
                paddle.paddleConfig.width));
    };
    Collision.prototype.bounceFromPaddles = function () {
        if (this.ball.getTopBoundary() < 0) {
            if (this.collidesWithPaddle(this.player2)) {
                this.ball.deltaX = this.calculateRebounce(this.player2);
                this.ball.switchDirectionY();
            }
            else {
                this.score('score_player1');
                this.ball.init();
            }
        }
        else if (this.ball.getBottomBoundary() > this.context.canvas.height) {
            if (this.collidesWithPaddle(this.player1)) {
                this.ball.deltaX = this.calculateRebounce(this.player1);
                this.ball.switchDirectionY();
            }
            else {
                this.score('score_player2');
                this.ball.init();
            }
        }
    };
    Collision.prototype.score = function (id) {
        var score = document.getElementById(id);
        if (id === 'score_player1') {
            this.player1Score += 1;
            score.value = this.player1Score.toString();
        }
        else {
            this.player2Score += 1;
            score.value = this.player2Score.toString();
        }
    };
    return Collision;
}());
exports.Collision = Collision;
