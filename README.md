<div align="center">
    <img src="https://drive.google.com/uc?export=view&id=14_MxI0TSoz8wK9e-f8BHzworUfehaZz3"/>
</div>

# Описание

Библиотека является надстройкой над [vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge). Сделана для быстрой разработки vk-mini-apps. Рекоменудется использовать с [@blumjs/cli](https://www.npmjs.com/package/@blumjs/cli).

## Функции

Все результаты функций можно отследить в секции [bridge.subscribe](https://www.npmjs.com/package/@vkontakte/vk-bridge)

- allowNotification: нет аргументов

- closeApp: нет аргументов

- copyText: требует текст, который будет скопирован в буфер обмена

- denyNotification: нет аргументов

- downloadFile: первый аргумент url файла, второй - название

- getStorage: нужен массив ключей

- getStorageKeys: нет аргументов

- getUserInfo: требует userId

- occureTapticEngine: стиль вибрации ("light" | "medium" | "heavy")

- openApp: первый аргумент - id приложения, второй - hash для открытия

- setStorageValue: объект с ключом и значением {key: "string", value: "string"}

- shareLink: нужна ссылка
