import Snow from "./snow";
import SnowFlyweightFactory from "./snow-flyweight-factory";
import { getRandomInt } from "./utils";

export class Sky {
  private ctx: CanvasRenderingContext2D | null = null;
  private snows: Snow[] = [];
  private readonly numSnows = 2000;

  private width = 0;
  private height = 0;

  constructor(canvasEl: HTMLCanvasElement) {
    this.ctx = canvasEl.getContext("2d");
    this.placeSnow(canvasEl);

    window.addEventListener("resize", this.handleResize);
  }

  placeSnow = (canvasEl: HTMLCanvasElement) => {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    this.width = canvasEl.width;
    this.height = canvasEl.height;

    for (let i = 0; i < this.numSnows; i += 1) {
      const x = getRandomInt(this.width * -0.25, this.width);
      const y = getRandomInt(this.height * -0.25, this.height * 0.8);

      const alpha = getRandomInt(2, 8) / 10;
      const size = getRandomInt(5, 25) / 10;

      const snowType = SnowFlyweightFactory.getSnowTypes({ alpha, size });
      const snow = new Snow(x, y, snowType);

      this.snows.push(snow);
    }
  };

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
      const x = getRandomInt(this.width * -0.25, this.width);
      const y = getRandomInt(this.height * -0.25, this.height * 0.8);
      // this.snows.push(new Snow(this.width, this.height));
      this.snows.push(new Snow(x, y, { alpha: 0.5, size: 2 }));
    }
  };
}
