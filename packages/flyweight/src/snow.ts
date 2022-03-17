import SnowFlyweight from "./snow-flywieght";
import { getRandomInt } from "./utils";

export default class Snow {
  /**
   * extrinsic state, unique state
   */
  private x: number = 0;
  private y: number = 0;
  private velocity = {
    x: 0,
    y: 0,
  };

  snowType: SnowFlyweight;

  constructor(x: number, y: number, snowType: SnowFlyweight) {
    this.x = x;
    this.y = y;

    this.snowType = snowType;

    this.velocity = {
      x: getRandomInt(20, 60) / 10,
      y: getRandomInt(10, 30) / 10,
    };
  }

  draw = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    this.updatePosition(width, height);

    this.snowType.draw(ctx, this.x, this.y);
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

    this.velocity = {
      x: getRandomInt(20, 60) / 10,
      y: getRandomInt(10, 30) / 10,
    };
  };
}
