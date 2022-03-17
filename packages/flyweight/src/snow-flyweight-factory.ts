import SnowFlyweight from "./snow-flywieght";

/**
 * Flyweight Factory Class
 */
export default class SnowFlyweightFactory {
  static snowTypes: SnowFlyweight[] = [];

  static getSnowTypes = ({ alpha, size }: { alpha: number; size: number }) => {
    let result = this.snowTypes.find(
      (s) => s.alpha === alpha && s.size === size
    );

    if (!result) {
      console.log("creating new snowType");
      result = new SnowFlyweight({ alpha, size });
      this.snowTypes.push(result);
    }

    return result;
  };
}
