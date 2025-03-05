# Паттерн Decorator - декоратор

```ts
// Тип для базовой функции кофе
type CoffeeFunction = () => number;

// Базовая функция кофе
function coffee():number {
    return 5; // Базовая стоимость кофе
}

// Декоратор для добавления молока
export function PatternDecoratorWithMilk(coffeeFn:CoffeeFunction):CoffeeFunction {
    return function () {
        return coffeeFn() + 2; // Стоимость кофе + молоко
    };
}

// Декоратор для добавления сахара
export function PatternDecoratorWithSugar(coffeeFn:CoffeeFunction):CoffeeFunction {
    return function () {
        return coffeeFn() + 1; // Стоимость кофе + сахар
    };
}

// Использование декораторов
const simpleCoffee:CoffeeFunction = coffee;
console.log(simpleCoffee()); // 5

const coffeeWithMilk:CoffeeFunction = PatternDecoratorWithMilk(coffee);
console.log(coffeeWithMilk()); // 7 (5 + 2)

const coffeeWithMilkAndSugar:CoffeeFunction = PatternDecoratorWithSugar(PatternDecoratorWithMilk(coffee));
console.log(coffeeWithMilkAndSugar()); // 8 (5 + 2 + 1)

```
