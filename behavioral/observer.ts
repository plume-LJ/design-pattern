/**
 * 观察者模式（Observer Pattern）是一种行为型设计模式，用于实现对象之间的一对多依赖关系。当一个对象的状态发生改变时，它的所有依赖对象都会收到通知并自动更新。

观察者模式的核心思想是将对象分为两类：主题（Subject）和观察者（Observer）。主题对象维护了一组观察者对象，并提供了方法来添加、删除和通知观察者。观察者对象注册到主题中，以便在主题的状态发生变化时接收通知并作出相应的响应。

观察者模式的关键点是：

* 主题（Subject）：包含观察者对象的集合，并提供方法来添加、删除和通知观察者。主题通常会维护一个状态，当状态发生变化时会通知观察者。
* 观察者（Observer）：定义了一个更新方法，用于接收主题通知并作出相应的反应。观察者可以注册到一个或多个主题中。
* 具体主题（Concrete Subject）：实现主题接口，维护观察者对象的集合，并在状态发生变化时通知观察者。
* 具体观察者（Concrete Observer）：实现观察者接口，接收主题的通知并作出相应的反应。
 */

// 主题接口
interface Subject {
  registerObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
}

// 观察者接口
interface Observer {
  update(subject: Subject): void;
}

// 具体主题
class ConcreteSubject implements Subject {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }

  public doSomething(): void {
    // 做一些操作
    // ...

    // 通知观察者
    this.notifyObservers();
  }
}

// 具体观察者
class ConcreteObserver implements Observer {
  public update(subject: Subject): void {
    // 在这里作出相应的反应，可以获取主题的状态
    console.log("Received notification from subject:", subject);
  }
}

// 创建具体主题和观察者
const subject: Subject = new ConcreteSubject();
const observer1: Observer = new ConcreteObserver();
const observer2: Observer = new ConcreteObserver();

// 注册观察者到主题
subject.registerObserver(observer1);
subject.registerObserver(observer2);

// 主题进行操作，触发通知
// @ts-ignore
subject.doSomething();

export {}