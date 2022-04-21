import { getCurrentDeliveryStatus } from "./api";
import { EDeliveryStatus } from "./constant";
import DeliveryStatusProcessButton from "./delivery-process-button";
import {
  DeliveryStatusProcessStretegyCookRequested,
  DeliveryStatusProcessStretegyArrivedShop,
  DeliveryStatusProcessStretegyCompleteAllocate,
  DeliveryStatusProcessStrategyCompletedPickUp,
} from "./strategy";

async function main() {
  const button = new DeliveryStatusProcessButton(
    new DeliveryStatusProcessStretegyCookRequested()
  );
  button.onPress();

  let count = 0;
  while (count < 5) {
    const currentDeliveryStatus = await getCurrentDeliveryStatus();

    switch (currentDeliveryStatus) {
      case EDeliveryStatus.COOK_REQUESTED:
        button.setStrategy(new DeliveryStatusProcessStretegyCookRequested());
        break;
      case EDeliveryStatus.ARRIVED_SHOP:
        button.setStrategy(new DeliveryStatusProcessStretegyArrivedShop());
        break;
      case EDeliveryStatus.COMPLETED_ALLOCATE:
        button.setStrategy(new DeliveryStatusProcessStretegyCompleteAllocate());
        break;
      case EDeliveryStatus.COMPLETED_PICKUP:
        button.setStrategy(new DeliveryStatusProcessStrategyCompletedPickUp());
        break;
      default:
        break;
    }

    button.onPress();
    count += 1;
  }
}

main();
