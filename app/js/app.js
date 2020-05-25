"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ball_1 = require("./ball");
var gamecontext_1 = require("./gamecontext");
var collision_1 = require("./collision");
var paddle_1 = require("./paddle");
var jquery_1 = __importDefault(require("jquery"));
jquery_1.default(document).ready(function () {
    var context = new gamecontext_1.GameContext();
    var player1 = new paddle_1.Paddle(context, 1);
    var player2 = new paddle_1.Paddle(context, 2);
    var ball = new ball_1.Ball(context);
    var collision = new collision_1.Collision(context, ball, player1, player2);
    var onKeyDown = function (evt) {
        if (evt.keyCode === 32) {
            ball.start();
        }
        else {
            player1.onKeyEvent(evt, true);
            player2.onKeyEvent(evt, true);
        }
    };
    var onKeyUp = function (evt) {
        player1.onKeyEvent(evt, false);
        player2.onKeyEvent(evt, false);
    };
    jquery_1.default(document).keydown(onKeyDown);
    jquery_1.default(document).keyup(onKeyUp);
    var draw = function () {
        context.clear();
        player1.move();
        player1.draw();
        player2.move();
        player2.draw();
        collision.bounceFromSides();
        collision.bounceFromPaddles();
        ball.move();
        ball.draw();
    };
    setInterval(draw, 10);
});
