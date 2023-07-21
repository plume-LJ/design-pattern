/**
 * 状态模式（State Pattern）是一种行为型设计模式，用于在对象内部状态发生改变时改变其行为。它允许对象在不同的状态下有不同的行为，并且可以动态地切换状态。

状态模式的核心思想是将对象的状态封装成独立的状态类，并将状态的行为抽象到共同的接口中。对象内部维护一个对当前状态对象的引用，并通过委托调用当前状态对象的方法来执行特定的行为。

状态模式的关键点是：

* 环境（Context）：维护一个对当前状态对象的引用，并提供一个方法来切换状态和执行特定的行为。环境对象将具体的行为委托给当前状态对象。
* 抽象状态（State）：定义状态的共同接口，并声明了一组抽象方法来描述状态的行为。
* 具体状态（Concrete State）：实现状态接口，并提供具体的行为实现。
 */

// 抽象状态
interface State {
  handle(context: Context): void;
}

// 具体状态 A
class ConcreteStateA implements State {
  public handle(context: Context): void {
    console.log("Handling state A");
    // 切换状态为具体状态 B
    context.setState(new ConcreteStateB());
  }
}

// 具体状态 B
class ConcreteStateB implements State {
  public handle(context: Context): void {
    console.log("Handling state B");
    // 切换状态为具体状态 A
    context.setState(new ConcreteStateA());
  }
}

// 环境类
class Context {
  private state: State;

  constructor() {
    // 初始状态为具体状态 A
    this.state = new ConcreteStateA();
  }

  public setState(state: State): void {
    this.state = state;
  }

  public request(): void {
    this.state.handle(this);
  }
}

// 创建环境对象
const context: Context = new Context();

// 执行请求，初始状态为具体状态 A
context.request();

// 执行请求，切换状态为具体状态 B
context.request();

// 执行请求，切换状态为具体状态 A
context.request();


export {}