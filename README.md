<div align="center">
    <img width="134" src="https://webstockreview.net/images/comet-clipart-meteorite-4.png">
</div>

# Description

This library gives functions based on [vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge). Created for fast developing vk-mini-apps. I recomend use it with [@blumjs/cli](https://www.npmjs.com/package/@blumjs/cli).

## Functions

All results functions track in bridge.subscribe

- allowNotification: no args

- closeApp: no args

- copyText: require text for copy in clipboard

- denyNotification: no args

- downloadFile: 1st arg is url for file, 2nd is filename

- getStorage: require array of keys

- getStorageKeys: no args

- getUserInfo: require userId, if not provided, function will return own userInfo

- occureTapticEngine: require style of vibration ("light" | "medium" | "heavy")

- openApp: 1st arg is app's id, 2nd is hash for open

- setStorageValue: arg is object with key and value

- shareLink: require link
