export class GameContext {
  public canvas: HTMLCanvasElement = document.getElementById("playground") as HTMLCanvasElement;
  public ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
  public width: number;
  public height: number;
  public constructor () {
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
  public clear(): void {
    this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }