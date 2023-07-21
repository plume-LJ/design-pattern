/**
 * 享元模式（Flyweight Pattern）是一种结构型设计模式，它通过共享对象来最大程度地减少内存使用和提高性能。享元模式将对象分为可共享的内部状态和不可共享的外部状态，通过共享内部状态来减少对象的数量。

享元模式的关键点是：

* 享元（Flyweight）：定义了共享对象的接口，包含了设置和获取外部状态的方法。
* 具体享元（Concrete Flyweight）：实现了享元接口，包含了内部状态和外部状态的具体实现。
* 享元工厂（Flyweight Factory）：负责创建和管理享元对象，提供了获取享元对象的方法。

享元模式通过共享内部状态来减少对象的数量，减少了内存的消耗和创建对象的开销。外部状态可以通过参数传递给享元对象，从而使得享元对象可以在不同的上下文中被共享。
 */

// 享元接口
interface Flyweight {
  operation(externalState: string): void;
}

// 具体享元类
class ConcreteFlyweight implements Flyweight {
  private internalState: string;

  constructor(internalState: string) {
    this.internalState = internalState;
  }

  public operation(externalState: string): void {
    console.log(`Internal state: ${this.internalState}, External state: ${externalState}`);
  }
}

// 享元工厂类
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  public getFlyweight(key: string): Flyweight {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
  }
}

// 创建享元工厂对象
const factory = new FlyweightFactory();

// 获取共享的享元对象
const flyweight1 = factory.getFlyweight("key1");
const flyweight2 = factory.getFlyweight("key1");

// 调用享元对象的操作方法，传递不同的外部状态
flyweight1.operation("state1");
flyweight2.operation("state2");

console.log(flyweight1 === flyweight2)

export {}