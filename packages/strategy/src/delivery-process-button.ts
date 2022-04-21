import { DeliveryStatusProcessStrategy } from "./strategy";

export default class DeliveryStatusProcessButton {
  private deliveryStatusProcessStrategy: DeliveryStatusProcessStrategy;

  constructor(strategy: DeliveryStatusProcessStrategy) {
    this.deliveryStatusProcessStrategy = strategy;
  }

  setStrategy(newStartegy: DeliveryStatusProcessStrategy) {
    this.deliveryStatusProcessStrategy = newStartegy;
  }

  onPress() {
    this.deliveryStatusProcessStrategy.process();
  }
}