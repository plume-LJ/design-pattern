/**
 * 桥接模式（Bridge Pattern）是一种结构型设计模式，将抽象部分与其具体实现部分分离，使它们可以独立地变化。

桥接模式的关键点是：

* 抽象部分（Abstraction）：定义了抽象部分的接口，并维护一个指向实现部分的引用。
* 具体抽象类（Concrete Abstraction）：扩展抽象部分的接口，通常包含一些与实现部分相关的业务方法。
* 实现部分（Implementor）：定义实现部分的接口，提供基本操作的方法。
* 具体实现类（Concrete Implementor）：实现实现部分的接口，提供具体的实现。
  
桥接模式的目的是将抽象部分与其具体实现部分解耦，使它们可以独立地变化。通过桥接模式，可以在不修改现有抽象部分和实现部分的情况下，动态地组合不同的抽象部分和实现部分，从而实现更灵活的系统。
 */
// 实现部分接口
// 实现部分接口
interface Implementor {
  operationImpl(): void;
}

// 具体实现类A
class ConcreteImplementorA implements Implementor {
  public operationImpl(): void {
    console.log("Concrete Implementor A operation");
  }
}

// 具体实现类B
class ConcreteImplementorB implements Implementor {
  public operationImpl(): void {
    console.log("Concrete Implementor B operation");
  }
}

// 抽象部分
abstract class Abstraction {
  protected implementor: Implementor;

  constructor(implementor: Implementor) {
    this.implementor = implementor;
  }

  public abstract operation(): void;

  public setImplementor(implementor: Implementor): void {
    this.implementor = implementor;
  }
}

// 具体抽象类A
class ConcreteAbstractionA extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }

  public operation(): void {
    console.log("Concrete Abstraction A operation");
    this.implementor.operationImpl();
  }
}

// 具体抽象类B
class ConcreteAbstractionB extends Abstraction {
  constructor(implementor: Implementor) {
    super(implementor);
  }

  public operation(): void {
    console.log("Concrete Abstraction B operation");
    this.implementor.operationImpl();
  }
}

// 创建具体实现对象A
const implementorA = new ConcreteImplementorA();

// 创建具体抽象对象A，并将具体实现对象A传入
const abstractionA = new ConcreteAbstractionA(implementorA);

// 调用具体抽象对象A的操作方法
abstractionA.operation();

// 创建具体实现对象B
const implementorB = new ConcreteImplementorB();

// 创建具体抽象对象B，并将具体实现对象B传入
const abstractionB = new ConcreteAbstractionB(implementorB);

// 调用具体抽象对象B的操作方法
abstractionB.operation();

// 修改具体抽象对象B的实现对象引用
abstractionB.setImplementor(implementorA);

// 再次调用具体抽象对象B的操作方法
abstractionB.operation();


export {};
