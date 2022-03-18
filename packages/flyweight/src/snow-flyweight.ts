/**
 * Flyweight Class
 */
export default class SnowFlyweight {
  /**
   * intrinsic state, shared state.
   * assume that they require huge memory
   */
  alpha: number;
  size: number;

  constructor({ alpha, size }: { alpha: number; size: number }) {
    this.alpha = alpha;
    this.size = size;
  }

  draw = (ctx: CanvasRenderingContext2D, x: number, y: number) => {
    ctx.beginPath();
    ctx.arc(x, y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };
}
