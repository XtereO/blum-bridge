import { vkBridge } from "../instance";

export const occureTapticEngine = (style: "light" | "medium" | "heavy") => {
  if (vkBridge.supports("VKWebAppTapticImpactOccurred")) {
    vkBridge.send("VKWebAppTapticImpactOccurred", {
      style,
    });
  }
};

export const closeApp = () => {
  console.log(vkBridge.supports("VKWebAppClose"));
  vkBridge
    .send("VKWebAppClose", { status: "success" })
    .then(() => console.log("app closed"))
    .catch((e) => console.log("failed to close, vk bridge error:", e));
};

export const shareLink = (link: string) => {
  vkBridge
    .send("VKWebAppShare", { link })
    .then((res) => console.log("share successfull", res))
    .catch((e) => console.log("share failed", e));
};

export const copyText = (text: string) => {
  vkBridge
    .send("VKWebAppCopyText", { text })
    .then(() => console.log("text copied: ", text))
    .catch((e) => console.log("copy err", e));
};

export const openApp = (appId: number, location?: string) => {
  vkBridge
    .send("VKWebAppOpenApp", { app_id: appId, location: location ?? "" })
    .then(() => console.log("app opened"))
    .catch((e) => console.log("app open err", e));
};

export const downloadFile = (url: string, filename: string) => {
  vkBridge
    .send("VKWebAppDownloadFile", { url, filename })
    .then(() => console.log("file downloaded successfull"))
    .catch((e) => console.log("file download err", e));
};
