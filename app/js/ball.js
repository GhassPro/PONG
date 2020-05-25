"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ball = /** @class */ (function () {
    function Ball(context) {
        this.context = context;
        this.radius = 10;
        this.init();
    }
    Ball.prototype.init = function () {
        this.x = this.context.canvas.width / 2;
        this.y = this.context.canvas.width / 2;
        this.deltaX = 0;
        this.deltaY = 0;
    };
    Ball.prototype.start = function () {
        this.deltaX = 2 * (Math.random() < 0.5 ? -1 : 1);
        this.deltaY = 4 * (Math.random() < 0.5 ? -1 : 1);
    };
    Ball.prototype.getLeftBoundary = function () {
        return this.x + this.deltaX - this.radius;
    };
    Ball.prototype.getBottomBoundary = function () {
        return this.y + this.deltaY + this.radius;
    };
    Ball.prototype.getRightBoundary = function () {
        return this.x + this.deltaX + this.radius;
    };
    Ball.prototype.getTopBoundary = function () {
        return this.y + this.deltaY - this.radius;
    };
    Ball.prototype.switchDirectionX = function () {
        this.deltaX = -this.deltaX;
    };
    Ball.prototype.switchDirectionY = function () {
        this.deltaY = -this.deltaY;
    };
    Ball.prototype.move = function () {
        this.x += this.deltaX;
        this.y += this.deltaY;
    };
    Ball.prototype.draw = function () {
        this.context.ctx.beginPath();
        this.context.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.ctx.closePath();
        this.context.ctx.fill();
    };
    return Ball;
}());
exports.Ball = Ball;
