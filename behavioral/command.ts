/**
 * 命令模式（Command Pattern）是一种行为型设计模式，它将请求封装成一个对象，从而使得可以使用不同的请求参数、队列或日志来参数化其他对象。命令模式还支持撤销操作。

命令模式的关键点是：

* 命令（Command）：定义了执行操作的接口。
* 具体命令（Concrete Command）：实现了命令接口，负责执行具体的操作。
* 接收者（Receiver）：执行命令所要求的操作。
* 调用者（Invoker）：发送命令并要求执行操作。
* 客户端（Client）：创建具体命令对象并设置接收者。

命令模式的核心思想是将请求封装成一个对象，从而使得可以将请求参数化、队列化或者记录日志，以及支持撤销操作。
 */

// 命令接口
interface Command {
  execute(): void;
}

// 具体命令类
class ConcreteCommand implements Command {
  private receiver: Receiver;

  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }

  public execute(): void {
    this.receiver.action();
  }
}

// 接收者类
class Receiver {
  public action(): void {
    console.log("Receiver action");
  }
}

// 调用者类
class Invoker {
  private command: Command | null = null;

  public setCommand(command: Command): void {
    this.command = command;
  }

  public executeCommand(): void {
    if (this.command) {
      this.command.execute();
    }
  }
}

// 创建接收者对象
const receiver = new Receiver();

// 创建具体命令对象，并传入接收者对象
const command = new ConcreteCommand(receiver);

// 创建调用者对象，并设置命令对象
const invoker = new Invoker();
invoker.setCommand(command);

// 调用者执行命令
invoker.executeCommand();


export {}