/**
 * 适配器模式（Adapter Pattern）是一种结构型设计模式，用于将一个类的接口转换成客户端所期望的另一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的类可以协同工作。

适配器模式的关键点是：

* 目标接口（Target Interface）：客户端所期望的接口，适配器将原接口转换成目标接口。
* 适配者类（Adaptee Class）：需要被适配的类，它包含了客户端所需要的功能，但其接口与目标接口不兼容。
* 适配器类（Adapter Class）：实现了目标接口，同时持有一个适配者类的实例，在目标接口的方法中调用适配者类的相应方法来完成操作。
 */

// 目标接口
interface Target {
  request(): void;
}

// 适配者类
class Adaptee {
  public specificRequest(): void {
    console.log("Adaptee specific request");
  }
}

// 适配器类
class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  public request(): void {
    console.log("Adapter request");
    this.adaptee.specificRequest();
  }
}

// 创建适配者对象
const adaptee = new Adaptee();

// 创建适配器对象，并传入适配者对象
const adapter = new Adapter(adaptee);

// 调用适配器的目标接口方法
adapter.request();


export {}