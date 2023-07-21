/**
 * 责任链模式（Chain of Responsibility Pattern）是一种行为型设计模式，它允许多个对象按照顺序处理请求，直到找到能够处理请求的对象为止。责任链模式将请求发送者和接收者解耦，使得多个对象都有机会处理请求。

责任链模式的关键点是：

* 抽象处理者（Handler）：定义了处理请求的接口，并持有下一个处理者的引用。
* 具体处理者（Concrete Handler）：实现了抽象处理者的接口，负责处理请求。如果自己无法处理请求，可以将请求传递给下一个处理者。
  
责任链模式的核心思想是，将请求沿着处理者链进行传递，每个处理者判断自己是否能够处理请求，如果可以则进行处理，否则将请求传递给下一个处理者。
 */

// 抽象处理者
abstract class Handler {
  protected successor: Handler | null = null;

  public setSuccessor(successor: Handler): void {
    this.successor = successor;
  }

  public abstract handleRequest(request: string): void;
}

// 具体处理者 A
class ConcreteHandlerA extends Handler {
  public handleRequest(request: string): void {
    if (request === "A") {
      console.log("ConcreteHandlerA handled the request");
    } else if (this.successor) {
      this.successor.handleRequest(request);
    } else {
      throw new Error('no successor');
    }
  }
}

// 具体处理者 B
class ConcreteHandlerB extends Handler {
  public handleRequest(request: string): void {
    if (request === "B") {
      console.log("ConcreteHandlerB handled the request");
    } else if (this.successor) {
      this.successor.handleRequest(request);
    } else {
      throw new Error('no successor');
    }
  }
}

// 创建具体处理者对象
const handlerA = new ConcreteHandlerA();
const handlerB = new ConcreteHandlerB();

// 设置处理者之间的顺序
handlerA.setSuccessor(handlerB);

// 处理请求
handlerA.handleRequest("A");
handlerA.handleRequest("B");
handlerA.handleRequest("C");


export {}