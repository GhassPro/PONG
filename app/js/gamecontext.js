"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameContext = /** @class */ (function () {
    function GameContext() {
        this.canvas = document.getElementById("playground");
        this.ctx = this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
    }
    GameContext.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.width, this.height);
    };
    return GameContext;
}());
exports.GameContext = GameContext;
