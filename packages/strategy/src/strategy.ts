import { arrivedShop, completeDelivery, completePickup, cookRequest } from "./api";

export interface DeliveryStatusProcessStrategy {
  process: () => Promise<void>;
}

export class DeliveryStatusProcessStretegyCompleteAllocate
  implements DeliveryStatusProcessStrategy
{
  async process() {
    console.group();
    console.log("processing completeAllocate");
    console.log("cookRequest API 요청 🖥");
    await cookRequest();
    console.log("===== Done =====\n");
    console.groupEnd();
  }
}

export class DeliveryStatusProcessStretegyCookRequested
  implements DeliveryStatusProcessStrategy
{
  async process() {
    console.group();
    console.log("processing cookRequest");
    console.log("현재 위치가 가게와 가까운지 체크✅");
    console.log("arriveShop API 요청 🖥");
    await arrivedShop();
    console.log("===== Done =====\n");
    console.groupEnd();
  }
}

export class DeliveryStatusProcessStretegyArrivedShop
  implements DeliveryStatusProcessStrategy
{
  async process() {
    console.group();
    console.log("processing arrivedShop");
    console.log("현재 위치가 가게와 가까운지 체크✅");
    console.log("completePickup API 요청 🖥");
    await completePickup();
    console.log("===== Done =====\n");
    console.groupEnd();
  }
}

export class DeliveryStatusProcessStrategyCompletedPickUp
  implements DeliveryStatusProcessStrategy
{
  async process() {
    console.group();
    console.log("processing completePickup");
    console.log("현재 위치가 전달지와 가까운지 체크✅");
    console.log("complete API 요청 🖥");
    await completeDelivery();
    console.log("===== Done =====\n");
    console.groupEnd();
  }
}
