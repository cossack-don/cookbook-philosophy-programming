# паттерн Абстрактная фабрика
Также известен как: Abstract Factory

Описание

Паттерн Абстрактная фабрика (Abstract Factory) предоставляет интерфейс для создания семейств связанных или зависимых объектов без указания их конкретных классов. В функциональной парадигме это можно реализовать с помощью функций, возвращающих другие функции или объекты, которые представляют собой "продукты" фабрики.

Пример паттерна "Абстрактная фабрика" в функциональной парадигме
Предположим, у нас есть две семьи продуктов:

Мебель: Стулья и столы.

Материалы: Деревянные и металлические.

Мы хотим создать фабрики, которые будут производить мебель из определенного материала.

```js
// Продукты: Стулья
const createWoodenChair = () => ({
  material: 'wood',
  type: 'chair',
  sitOn: () => console.log('Sitting on a wooden chair'),
});

const createMetalChair = () => ({
  material: 'metal',
  type: 'chair',
  sitOn: () => console.log('Sitting on a metal chair'),
});

// Продукты: Столы
const createWoodenTable = () => ({
  material: 'wood',
  type: 'table',
  putOn: () => console.log('Putting something on a wooden table'),
});

const createMetalTable = () => ({
  material: 'metal',
  type: 'table',
  putOn: () => console.log('Putting something on a metal table'),
});

// Абстрактные фабрики
const woodenFurnitureFactory = () => ({
  createChair: createWoodenChair,
  createTable: createWoodenTable,
});

const metalFurnitureFactory = () => ({
  createChair: createMetalChair,
  createTable: createMetalTable,
});

// Использование
const woodFactory = woodenFurnitureFactory();
const metalFactory = metalFurnitureFactory();

// Создание деревянной мебели
const woodenChair = woodFactory.createChair();
const woodenTable = woodFactory.createTable();

woodenChair.sitOn(); // Выведет: Sitting on a wooden chair
woodenTable.putOn(); // Выведет: Putting something on a wooden table

// Создание металлической мебели
const metalChair = metalFactory.createChair();
const metalTable = metalFactory.createTable();

metalChair.sitOn(); // Выведет: Sitting on a metal chair
metalTable.putOn(); // Выведет: Putting something on a metal table

```


Объяснение
Продукты:

createWoodenChair, createMetalChair, createWoodenTable, createMetalTable — это функции, которые создают объекты, представляющие продукты (стулья и столы).

Каждый продукт имеет свои свойства (material, type) и методы (sitOn, putOn).

Абстрактные фабрики:

woodenFurnitureFactory и metalFurnitureFactory — это функции, которые возвращают объекты с методами для создания продуктов (стульев и столов).

Каждая фабрика создает продукты из определенного материала (дерево или металл).

Использование:

Мы создаем фабрики (woodFactory и metalFactory) и используем их для создания продуктов.

Продукты, созданные одной фабрикой, совместимы друг с другом (например, деревянный стул и деревянный стол).

Преимущества
Гибкость:

Легко добавлять новые семейства продуктов (например, пластиковую мебель) или новые типы продуктов (например, шкафы).

Согласованность:

Продукты, созданные одной фабрикой, гарантированно совместимы друг с другом.

Чистая функциональная парадигма:

Используются функции высшего порядка и композиция, что соответствует функциональному стилю.
