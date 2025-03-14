# Паттерн Builder - строитель

```ts

/*
Example
   PatternBuilder()
  .setName('Laptop')
  .setPrice(1200)
  .setCategory('Electronics')
  .setDescription('A powerful laptop for work and gaming.')
  .build();
*/

interface IProduct {
    name?: string;
    price?: number | string;
    category?: string;
    description?: string;
}

interface IProductBuilder {
    setName: (name: string) => IProductBuilder;
    setPrice: (price: string | number) => IProductBuilder;
    setCategory: (category: string) => IProductBuilder;
    setDescription: (description: string) => IProductBuilder;
    build: () => IProduct;
}

export function PatternBuilder() {
    let product:IProduct = {};

    function setName(this: typeof builder,name:string): IProductBuilder {
        product.name = name;
        return this; // Возвращаем this для цепочки вызовов
    }

    // Метод для установки цены продукта
    function setPrice(this: typeof builder,price:string | number): IProductBuilder {
        product.price = price;
        return this;
    }

    // Метод для установки категории продукта
    function setCategory(this: typeof builder,category:string): IProductBuilder {
        product.category = category;
        return this;
    }

    // Метод для добавления описания продукта
    function setDescription(this: typeof builder,description:string): IProductBuilder  {
        product.description = description;
        return this;
    }

    // Метод для завершения строительства и возврата готового продукта
    function build():IProduct {
        return product;
    }

    // Возвращаем методы строителя
    const builder:IProductBuilder = {
        setName,
        setPrice,
        setCategory,
        setDescription,
        build,
    };

    return builder;
}

```
