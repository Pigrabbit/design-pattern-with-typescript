import { deliveryStatusList } from "./constant";

export const getCurrentDeliveryStatus = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const min = 0;
      const max = 3;
      const idx = Math.floor(Math.random() * (max - min + 1) + min);
      resolve(deliveryStatusList[idx]);
    }, 200)
  );

export const cookRequest = () =>
  new Promise((resolve) => setTimeout(resolve, 400));

export const arrivedShop = () =>
  new Promise((resolve) => setTimeout(resolve, 400));

export const completePickup = () =>
  new Promise((resolve) => setTimeout(resolve, 400));

export const completeDelivery = () =>
  new Promise((resolve) => setTimeout(resolve, 400));
