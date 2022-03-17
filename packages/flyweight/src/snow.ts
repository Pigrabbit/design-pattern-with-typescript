import { getRandomInt } from "./utils";

export default class Snow {
  private x: number = 0;
  private y: number = 0;
  private velocity = {
    x: 0,
    y: 0,
  };

  private alpha: number = 0;
  private rgba = "rgba(255, 255, 255, 1)";
  private size: number = 0;

  constructor(width: number, height: number) {
    this.reset(width, height);
  }

  draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    this.updatePosition(width, height);
    this.drawPath(ctx);
  };

  private drawPath = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.rgba;
    ctx.strokeStyle = this.rgba;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  private updatePosition = (width: number, height: number) => {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.y >= 0.55 * height && this.x >= 0.2 * width) {
      this.velocity.x += 0.05;
      this.velocity.y += 0.01;
    }
    if (this.y >= 0.75 * height && this.x >= 0.2 * width) {
      this.velocity.x += 0.05;
      this.velocity.y += 0.01;
    }

    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.reset(width, height);
    }
  };

  private reset = (width: number, height: number) => {
    this.x = getRandomInt(width * -0.25, width);
    this.y = getRandomInt(height * -0.25, height * 0.8);
    this.size = getRandomInt(5, 25) / 10;

    // this.alpha = getRandomInt(2, 8) / 10;
    this.alpha = 0.5;
    this.rgba = `rgba(255, 255, 255, ${this.alpha})`;

    this.velocity = {
      x: getRandomInt(20, 60) / 10,
      y: getRandomInt(10, 30) / 10,
    };
  };
}
