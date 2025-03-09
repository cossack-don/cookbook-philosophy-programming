# Observer

Предположим, у нас есть:

Издатель (Publisher): Объект, который уведомляет подписчиков о событиях.

Подписчики (Subscribers): Функции, которые реагируют на события.

Мы создадим простую систему, где издатель уведомляет подписчиков о изменениях.

```js
Наблюдатель
// Издатель (Publisher)
function createPublisher() {
  const subscribers = new Set(); // Хранилище подписчиков

  return {
    subscribe(handler) {
      subscribers.add(handler); // Добавляем подписчика
      return () => subscribers.delete(handler); // Возвращаем функцию для отписки
    },
    notify(data) {
      subscribers.forEach((handler) => handler(data)); // Уведомляем всех подписчиков
    },
  };
}

// Подписчики (Subscribers)
const subscriber1 = (data) => {
  console.log(`Subscriber 1 received: ${data}`);
};

const subscriber2 = (data) => {
  console.log(`Subscriber 2 received: ${data}`);
};

// Использование
const publisher = createPublisher();

// Подписываемся на события
const unsubscribe1 = publisher.subscribe(subscriber1);
const unsubscribe2 = publisher.subscribe(subscriber2);

// Уведомляем подписчиков
publisher.notify('Hello, World!');
// Выведет:
// Subscriber 1 received: Hello, World!
// Subscriber 2 received: Hello, World!

// Отписываем одного подписчика
unsubscribe1();

// Уведомляем подписчиков снова
publisher.notify('Goodbye!');
// Выведет:
// Subscriber 2 received: Goodbye!

```


Преимущества
Гибкость:

Подписчики могут быть добавлены или удалены в любой момент.

Издатель не зависит от конкретных подписчиков.

Разделение ответственности:

Издатель отвечает только за уведомление подписчиков.

Подписчики отвечают за реакцию на события.

Чистая функциональная парадигма:

Используются функции высшего порядка и замыкания, что соответствует функциональному стилю.
