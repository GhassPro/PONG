"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paddle = /** @class */ (function () {
    function Paddle(context, player) {
        this.context = context;
        this.player = player;
        this.height = 10;
        this.x = 50;
        if (this.player === 1) {
            this.paddleConfig = {
                rightDown: false,
                leftDown: false,
                x: 50,
                height: 10,
                width: 75,
                y: this.context.canvas.height - this.height,
                keyLeft: 37,
                keyRight: 39,
            };
        }
        else {
            this.paddleConfig = {
                rightDown: false,
                leftDown: false,
                x: 50,
                height: 10,
                width: 75,
                y: 0,
                keyLeft: 65,
                keyRight: 68,
            };
        }
    }
    Paddle.prototype.move = function () {
        if (this.paddleConfig.rightDown) {
            if (this.paddleConfig.x + this.paddleConfig.width + 5 <= this.context.canvas.width) {
                this.paddleConfig.x += 5;
            }
        }
        else if (this.paddleConfig.leftDown) {
            if (this.paddleConfig.x - 5 >= 0) {
                this.paddleConfig.x -= 5;
            }
        }
    };
    Paddle.prototype.draw = function () {
        this.context.ctx.beginPath();
        this.context.ctx.rect(this.paddleConfig.x, this.paddleConfig.y, this.paddleConfig.width, this.paddleConfig.height);
        this.context.ctx.closePath();
        this.context.ctx.fill();
    };
    Paddle.prototype.onKeyEvent = function (event, isDown) {
        if (event.keyCode === this.paddleConfig.keyRight) {
            this.paddleConfig.rightDown = isDown;
        }
        else if (event.keyCode === this.paddleConfig.keyLeft) {
            this.paddleConfig.leftDown = isDown;
        }
    };
    return Paddle;
}());
exports.Paddle = Paddle;
