/**
 * 抽象工厂模式（Abstract Factory Pattern）是一种创建型设计模式，它提供了一种方式来创建一组相关或相互依赖的对象，
 * 而无需指定它们具体的类。抽象工厂模式通过将对象的创建委托给多个具体工厂类，实现了对象创建和使用的解耦。
 *
 * 抽象工厂模式由以下几个关键角色组成：
 *
 * 抽象工厂（Abstract Factory）：定义了创建一组相关产品对象的接口，可以是一个接口或抽象类。抽象工厂通常包含多个工厂方法，每个工厂方法用于创建一个具体产品对象。
 * 具体工厂（Concrete Factory）：实现了抽象工厂的接口，负责创建具体的产品对象。
 * 抽象产品（Abstract Product）：定义了产品对象的接口，可以是一个接口或抽象类。
 * 具体产品（Concrete Product）：实现了抽象产品的接口，表示具体的产品对象。
 */
// 抽象产品接口
interface AbstractProductA {
  operation(): void;
}

// 具体产品A1
class ConcreteProductA1 implements AbstractProductA {
  operation(): void {
    console.log("ConcreteProductA1 operation");
  }
}

// 具体产品A2
class ConcreteProductA2 implements AbstractProductA {
  operation(): void {
    console.log("ConcreteProductA2 operation");
  }
}

// 抽象产品接口
interface AbstractProductB {
  operation(): void;
}

// 具体产品B1
class ConcreteProductB1 implements AbstractProductB {
  operation(): void {
    console.log("ConcreteProductB1 operation");
  }
}

// 具体产品B2
class ConcreteProductB2 implements AbstractProductB {
  operation(): void {
    console.log("ConcreteProductB2 operation");
  }
}

// 抽象工厂接口
interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}

// 具体工厂1
class ConcreteFactory1 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}

// 具体工厂2
class ConcreteFactory2 implements AbstractFactory {
  createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}

// 使用具体工厂1来创建产品
const factory1: AbstractFactory = new ConcreteFactory1();
const productA1: AbstractProductA = factory1.createProductA();
const productB1: AbstractProductB = factory1.createProductB();
productA1.operation(); // 输出 "ConcreteProductA1 operation"
productB1.operation(); // 输出 "ConcreteProductB1 operation"

// 使用具体工厂2来创建产品
const factory2: AbstractFactory = new ConcreteFactory2();
const productA2: AbstractProductA = factory2.createProductA();
const productB2: AbstractProductB = factory2.createProductB();
productA2.operation(); // 输出 "ConcreteProductA2 operation"
productB2.operation(); // 输出 "ConcreteProductB2
export {};