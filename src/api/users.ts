import { vkBridge } from "../instance";

export const getUserInfo = async (user_id?: number) => {
  return vkBridge
    .send("VKWebAppGetUserInfo", user_id ? { user_id } : {})
    .then((data) => data)
    .catch((e) => {
      console.log("vkBridge getUserInfo failed: ", e);
      return e;
    });
};
