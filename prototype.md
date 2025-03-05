# Паттерн Прототип

```ts
import cloneDeep from './cloneDeep.ts'

// Функция, которая создает прототип объекта
function createPrototypeObject(properties, deepCloneFlag = false) {

  const prototype = {

    clone(additionalProperties = {}) {

      let newObject;

      if (deepCloneFlag) {
        // Глубокое копирование
        newObject = cloneDeep(properties);
      } else {
        // Поверхностное копирование
        newObject = Object.create(this);
        Object.assign(newObject, properties);
      }

      // Добавляем дополнительные свойства
      Object.assign(newObject, additionalProperties);

      // Делаем объект реактивным
      return reactive(newObject);
    }
  };

  return prototype;
}

// Реализация

// Исходный объект
const obj = {
  name: "Car",
  details: {
    wheels: 4,
    engine: {
      type: "V8"
    }
  }
};

// Создаем прототип с глубоким копированием
const carPrototypeDeep = createPrototypeObject(obj, true);

// Создаем новый объект на основе прототипа
const car1 = carPrototypeDeep.clone();
console.log(car1.details.wheels); // 4

// Изменяем вложенный объект
car1.details.wheels = 6;
console.log(car1.details.wheels); // 6
console.log(obj.details.wheels); // 4 (не изменилось, так как копирование глубокое)

// Создаем прототип с поверхностным копированием
const carPrototypeShallow = createPrototypeObject(obj, false);

// Создаем новый объект на основе прототипа
const car2 = carPrototypeShallow.clone();
console.log(car2.details.wheels); // 4

// Изменяем вложенный объект
car2.details.wheels = 6;
console.log(car2.details.wheels); // 6
console.log(obj.details.wheels); // 6 (изменилось, так как копирование поверхностное)
```
