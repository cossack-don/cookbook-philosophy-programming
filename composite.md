# Паттерн "Компоновщик" (Composite)

Паттерн "Компоновщик" (Composite) позволяет сгруппировать объекты в древовидную структуру и работать с ними как с единым объектом. 
Это полезно, когда нужно работать с иерархией объектов, где одни объекты могут содержать другие объекты.

```js
// Функция для создания листа (Leaf)
const createLeaf = (name) => {
    return {
        name,
        // Лист не может иметь дочерних элементов, поэтому методы add и remove просто выводят сообщение
        add: () => console.log("Невозможно добавить дочерний элемент к листу"),
        remove: () => console.log("Невозможно удалить дочерний элемент из листа"),
        // Метод для отображения листа
        display: (depth) => console.log(`${"-".repeat(depth)} ${name}`),
    };
};

// Функция для создания композита (Composite)
const createComposite = (name) => {
    const children = []; // Массив для хранения дочерних элементов

    return {
        name,
        // Метод для добавления дочернего элемента
        add: (component) => children.push(component),
        // Метод для удаления дочернего элемента
        remove: (component) => {
            const index = children.indexOf(component);
            if (index !== -1) {
                children.splice(index, 1);
            }
        },
        // Метод для отображения композита и всех его дочерних элементов
        display: (depth) => {
            console.log(`${"-".repeat(depth)} ${name}`);
            children.forEach((child) => child.display(depth + 2));
        },
    };
};

// Использование паттерна Компоновщик в функциональном стиле
const root = createComposite("Root");

const branch1 = createComposite("Branch 1");
const branch2 = createComposite("Branch 2");

const leaf1 = createLeaf("Leaf 1");
const leaf2 = createLeaf("Leaf 2");
const leaf3 = createLeaf("Leaf 3");

// Добавляем листья к ветвям
branch1.add(leaf1);
branch1.add(leaf2);
branch2.add(leaf3);

// Добавляем ветви к корню
root.add(branch1);
root.add(branch2);

// Отображаем всю структуру
root.display(1);

// Вывод:
// - Root
//   - Branch 1
//     - Leaf 1
//     - Leaf 2
//   - Branch 2
//     - Leaf 3

```

Преимущества функционального подхода:
Мы избегаем использования классов и наследования.

Код более декларативный и основан на функциях, что соответствует функциональной парадигме.

Легко создавать новые объекты с помощью функций.

Этот пример показывает, как можно реализовать паттерн "Компоновщик" в функциональном стиле на JavaScript.
