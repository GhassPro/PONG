import { GameContext } from './gamecontext';

export class Ball {
    public radius: number;
    public x: number;
    public y: number;
    public deltaX: number;
    public deltaY: number;
  
    public constructor(public context: GameContext) {
        this.radius = 10;
        this.init();
    }
    public init(): void {
        this.x = this.context.canvas.width / 2;
        this.y = this.context.canvas.width / 2;
        this.deltaX = 0;
        this.deltaY = 0;
    }
    public start(): void {
        this.deltaX = 2 * (Math.random() < 0.5 ? -1 : 1);
        this.deltaY = 4 * (Math.random() < 0.5 ? -1 : 1);
    }
    public getLeftBoundary(): number {
        return this.x + this.deltaX - this.radius;
    }
    public getBottomBoundary(): number {
        return this.y + this.deltaY + this.radius;
    }
    public getRightBoundary(): number {
        return this.x + this.deltaX + this.radius;
    }
    public getTopBoundary(): number {
        return this.y + this.deltaY - this.radius;
    }
    public switchDirectionX(): void {
        this.deltaX = -this.deltaX;
    }
    public switchDirectionY(): void {
        this.deltaY = -this.deltaY;
    }
    public move(): void {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }
    public draw(): void {
        this.context.ctx.beginPath();
        this.context.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        this.context.ctx.closePath();
        this.context.ctx.fill();
    }
  }  