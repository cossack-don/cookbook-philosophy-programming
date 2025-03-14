# Паттерн Bridge

Описание
Предположим, у нас есть абстракция — устройство (например, пульт управления), и реализация — конкретное устройство (например, телевизор или радио). Мы хотим, чтобы пульт мог управлять разными устройствами, не зная их конкретной реализации.

Шаги:
Реализация (Implementation): Функции, которые выполняют конкретные действия (например, включение/выключение телевизора или радио).

Абстракция (Abstraction): Функции, которые используют реализацию для выполнения задач (например, пульт управления).

```js
// Реализация (Implementation)
const tvImplementation = {
  turnOn: () => console.log('TV is ON'),
  turnOff: () => console.log('TV is OFF'),
};

const radioImplementation = {
  turnOn: () => console.log('Radio is ON'),
  turnOff: () => console.log('Radio is OFF'),
};

// Абстракция (Abstraction)
function createRemoteControl(device) {
  return {
    turnOn: () => device.turnOn(),
    turnOff: () => device.turnOff(),
  };
}

// Использование
const tvRemote = createRemoteControl(tvImplementation);
const radioRemote = createRemoteControl(radioImplementation);

tvRemote.turnOn();  // Выведет: TV is ON
tvRemote.turnOff(); // Выведет: TV is OFF

radioRemote.turnOn();  // Выведет: Radio is ON
radioRemote.turnOff(); // Выведет: Radio is OFF

```
