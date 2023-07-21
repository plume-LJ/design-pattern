/**
 * 中介者模式（Mediator Pattern）是一种行为型设计模式，用于降低多个对象之间的耦合度，通过引入一个中介者对象来协调这些对象之间的交互。

中介者模式的核心思想是将对象之间的交互逻辑集中在一个中介者对象中，而不是让对象直接相互引用。这样可以将对象之间的交互解耦，使其更加灵活、可维护和可扩展。

中介者模式的关键点是：

* 中介者接口（Mediator）：定义了对象之间交互的方法。
* 具体中介者（ConcreteMediator）：实现了中介者接口，负责协调对象之间的交互逻辑。
* 同事类（Colleague）：定义了需要进行交互的对象接口。
* 具体同事类（ConcreteColleague）：实现了同事类接口，负责具体的业务逻辑，并通过中介者对象来与其他同事类进行交互。
 */

// 中介者接口
interface Mediator {
  send(message: string, colleague: Colleague): void;
  setColleague1(colleague: Colleague): void;
  setColleague2(colleague: Colleague): void;
}

// 同事类接口
interface Colleague {
  receive(message: string): void;
  send(message: string): void;
}

// 具体中介者
class ConcreteMediator implements Mediator {
  private colleague1: Colleague;
  private colleague2: Colleague;

  public setColleague1(colleague: Colleague): void {
    this.colleague1 = colleague;
  }

  public setColleague2(colleague: Colleague): void {
    this.colleague2 = colleague;
  }

  public send(message: string, colleague: Colleague): void {
    if (colleague === this.colleague1) {
      this.colleague2.receive(message);
    } else if (colleague === this.colleague2) {
      this.colleague1.receive(message);
    }
  }
}

// 具体同事类
class ConcreteColleague implements Colleague {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  public receive(message: string): void {
    console.log(`Received: ${message}`);
  }

  public send(message: string): void {
    console.log(`Sent: ${message}`);
    this.mediator.send(message, this);
  }
}

// 创建中介者对象
const mediator: Mediator = new ConcreteMediator();

// 创建具体同事对象
const colleague1: Colleague = new ConcreteColleague(mediator);
const colleague2: Colleague = new ConcreteColleague(mediator);

// 设置中介者对象的同事对象
mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

// 同事对象之间进行交互
colleague1.send("Hello from colleague1");
colleague2.send("Hello from colleague2");

// 聊天室
(function(){
  // 中介者接口
interface ChatRoomMediator {
  sendMessage(message: string, user: User): void;
  addUser(user: User): void;
}

// 用户类
class User {
  private name: string;
  private mediator: ChatRoomMediator;

  constructor(name: string, mediator: ChatRoomMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  public getName(): string {
    return this.name;
  }

  public sendMessage(message: string): void {
    this.mediator.sendMessage(message, this);
  }

  public receiveMessage(message: string, sender: User): void {
    console.log(`${this.name} received a message from ${sender.getName()}: ${message}`);
  }
}

// 聊天室中介者
class ChatRoom implements ChatRoomMediator {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public addUser(user: User): void {
    this.users.push(user);
  }

  public sendMessage(message: string, user: User): void {
    this.users.forEach((u) => {
      if (u !== user) {
        u.receiveMessage(message, user);
      }
    });
  }
}

// 创建聊天室中介者
const chatRoom: ChatRoomMediator = new ChatRoom();

// 创建用户
const user1: User = new User("User 1", chatRoom);
const user2: User = new User("User 2", chatRoom);
const user3: User = new User("User 3", chatRoom);

// 将用户添加到聊天室中
chatRoom.addUser(user1);
chatRoom.addUser(user2);
chatRoom.addUser(user3);

// 用户发送消息
user1.sendMessage("Hello, everyone!");
user2.sendMessage("Hi, User 1!");

})()

export {}