import { vkBridge } from "../instance";

export const setStorageValue = ({
  key,
  value,
}: {
  key: string;
  value: any;
}) => {
  return vkBridge
    .send("VKWebAppStorageSet", { key, value: JSON.stringify(value) })
    .then((res) => res.result)
    .catch((e) => e);
};

export const getStorageKeys = () => {
  return vkBridge
    .send("VKWebAppStorageGetKeys")
    .then((res) => res.keys)
    .catch((e) => e);
};

export const getStorage = (keys: string[]) => {
  return vkBridge
    .send("VKWebAppStorageGet", { keys })
    .then((res) => res.keys)
    .catch((e) => e);
};
