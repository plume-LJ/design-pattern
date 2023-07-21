/**
 * 策略模式（Strategy Pattern）是一种行为型设计模式，用于在运行时选择算法的行为。它允许定义一组算法，并将每个算法封装在独立的策略类中，使它们可以互相替换。

策略模式的核心思想是将算法的使用与算法的实现分离。通过将算法封装在不同的策略类中，客户端可以根据需要选择不同的策略来实现特定的行为。

策略模式的关键点是：

* 上下文（Context）：维护一个对策略对象的引用，并提供一个方法来执行特定的算法。上下文可以根据需要动态地切换策略。
* 策略（Strategy）：定义一个公共接口，封装了具体的算法。每个具体策略类都实现了该接口，并提供了自己的算法实现。
* 具体策略（Concrete Strategy）：实现策略接口，并提供具体的算法实现。
 */

// 策略接口
interface Strategy {
  execute(): void;
}

// 具体策略 A
class ConcreteStrategyA implements Strategy {
  public execute(): void {
    console.log("Executing strategy A");
  }
}

// 具体策略 B
class ConcreteStrategyB implements Strategy {
  public execute(): void {
    console.log("Executing strategy B");
  }
}

// 上下文类
class Context {
  private strategy: Strategy;

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  public executeStrategy(): void {
    this.strategy.execute();
  }
}

// 创建具体策略和上下文对象
const strategyA: Strategy = new ConcreteStrategyA();
const strategyB: Strategy = new ConcreteStrategyB();
const context: Context = new Context();

// 设置具体策略 A 并执行
context.setStrategy(strategyA);
context.executeStrategy();

// 设置具体策略 B 并执行
context.setStrategy(strategyB);
context.executeStrategy();


export {}