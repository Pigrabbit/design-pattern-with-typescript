import Snow from "./snow";

export class Sky {
  private ctx: CanvasRenderingContext2D | null = null;
  private snows: Snow[] = [];
  private readonly numSnows = 2000;

  private width = 0;
  private height = 0;

  constructor(canvasEl: HTMLCanvasElement) {
    this.ctx = canvasEl.getContext("2d");

    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  draw = () => {
    this.animationLoop();
  };

  drawSnows = () => {
    if (!this.ctx) return;

    this.snows.forEach((snow) => {
      snow.draw(this.ctx, this.width, this.height);
    });
  };

  animationLoop = () => {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    this.drawSnows();
    requestAnimationFrame(this.animationLoop);
  };

  handleResize = () => {
    const canvasEl = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvasEl) return;

    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    if (this.snows.length === this.numSnows) return;
    for (let i = 0; i < this.numSnows; i += 1) {
      this.snows.push(new Snow(this.width, this.height));
    }
  };
}
