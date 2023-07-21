/**
 * 模板方法模式（Template Method Pattern）是一种行为型设计模式，用于定义算法的骨架，但将一些步骤的具体实现留给子类来完成。它通过定义一个模板方法来封装算法的结构，而将具体实现延迟到子类中。

模板方法模式的核心思想是将算法的通用部分放在一个抽象的父类中，并将可变的部分延迟到子类中实现。父类中的模板方法定义了算法的骨架，它包含了一系列的步骤，每个步骤可以是抽象的或具体的。

模板方法模式的关键点是：

* 抽象类（Abstract Class）：定义一个模板方法来封装算法的结构，并提供一些默认的实现或空实现的钩子方法。抽象类可以包含抽象方法、具体方法和钩子方法。
* 具体类（Concrete Class）：继承抽象类，并实现抽象方法和钩子方法，完成算法的具体实现。
 */
// 抽象类
abstract class AbstractClass {
  // 模板方法
  public templateMethod(): void {
    this.step1();
    this.step2();
    this.step3();
  }

  // 抽象方法
  protected abstract step1(): void;

  // 具体方法
  protected step2(): void {
    console.log("Step 2");
  }

  // 钩子方法
  protected step3(): void {}
}

// 具体类 A
class ConcreteClassA extends AbstractClass {
  protected step1(): void {
    console.log("ConcreteClassA - Step 1");
  }

  protected step3(): void {
    console.log("ConcreteClassA - Step 3");
  }
}

// 具体类 B
class ConcreteClassB extends AbstractClass {
  protected step1(): void {
    console.log("ConcreteClassB - Step 1");
  }
}

// 创建具体类对象并调用模板方法
const concreteA: AbstractClass = new ConcreteClassA();
concreteA.templateMethod();

const concreteB: AbstractClass = new ConcreteClassB();
concreteB.templateMethod();

export {

}