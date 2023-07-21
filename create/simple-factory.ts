/**
 * *简单工厂*（非 不符合开闭原则）
 * 简单工厂模式（Simple Factory Pattern）是工厂模式的一种，它通过一个工厂类来封装对象的创建过程，根据传入的参数或条件来创建具体的对象实例。

 * 简单工厂模式具有以下特点：
 * 有一个具体的工厂类，负责创建具体的对象实例。
 * 工厂类通常包含一个静态方法或实例方法，根据传入的参数或条件来创建对象。
 * 客户端通过调用工厂类的方法来创建对象，而不需要直接实例化具体的对象。
 */
interface Product {
  operation(): void;
}

class ConcreteProductA implements Product {
  operation(): void {
    console.log("ConcreteProductA operation");
  }
}

class ConcreteProductB implements Product {
  operation(): void {
    console.log("ConcreteProductB operation");
  }
}

class SimpleFactory {
  createProduct(type: string): Product {
    switch (type) {
      case "A":
        return new ConcreteProductA();
      case "B":
        return new ConcreteProductB();
      default:
        throw new Error("Invalid product type.");
    }
  }
}

// 创建简单工厂对象
const factory = new SimpleFactory();

// 使用简单工厂创建对象
const productA = factory.createProduct("A");
productA.operation(); // 输出 "ConcreteProductA operation"

const productB = factory.createProduct("B");
productB.operation(); // 输出 "ConcreteProductB operation"

export {};
