/**
 * 工厂模式（Factory Pattern）是一种创建型设计模式，它提供了一种统一的接口来创建对象，
 * 但将具体创建对象的逻辑延迟到子类中。工厂模式通过解耦对象的创建和使用，提供了一种灵活的方式来创建对象。

 * 工厂模式由以下几个关键角色组成：

 * 抽象工厂（Abstract Factory）：定义了创建对象的接口，可以是一个接口或抽象类。工厂类通常包含一个工厂方法，用于创建具体的产品对象。
 * 具体工厂（Concrete Factory）：实现了抽象工厂的接口，负责具体的对象创建。
 * 抽象产品（Abstract Product）：定义了产品对象的接口，可以是一个接口或抽象类。
 * 具体产品（Concrete Product）：实现了抽象产品的接口，表示具体的产品对象。
 * 工厂模式可以分为简单工厂模式、工厂方法模式和抽象工厂模式。
 * 简单工厂模式由一个工厂类负责创建所有的具体产品对象。
 * 工厂方法模式将具体产品的创建延迟到子类中，每个具体产品都对应一个具体工厂。
 * 抽象工厂模式提供了一种将一组相关产品对象的创建集中到一起的方式，每个具体工厂负责创建一族产品。
 */
// 抽象产品接口
interface Product {
  operation(): void;
}

// 具体产品A
class ConcreteProductA implements Product {
  operation(): void {
    console.log("ConcreteProductA operation");
  }
}

// 具体产品B
class ConcreteProductB implements Product {
  operation(): void {
    console.log("ConcreteProductB operation");
  }
}

// 抽象工厂接口
interface Factory {
  createProduct(): Product;
}

// 具体工厂A
class ConcreteFactoryA implements Factory {
  createProduct(): Product {
    return new ConcreteProductA();
  }
}

// 具体工厂B
class ConcreteFactoryB implements Factory {
  createProduct(): Product {
    return new ConcreteProductB();
  }
}

// 使用具体工厂A来创建产品
const factoryA: Factory = new ConcreteFactoryA();
const productA: Product = factoryA.createProduct();
productA.operation(); // 输出 "ConcreteProductA operation"

// 使用具体工厂B来创建产品
const factoryB: Factory = new ConcreteFactoryB();
const productB: Product = factoryB.createProduct();
productB.operation(); // 输出 "ConcreteProductB operation"


export {}