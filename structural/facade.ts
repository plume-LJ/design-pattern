/**
 * 外观模式（Facade Pattern）是一种结构型设计模式，它提供了一个统一的接口，用于访问系统中的一组接口。外观模式隐藏了系统的复杂性，并将客户端与系统的内部子系统解耦。

外观模式的关键点是：

* 外观（Facade）：提供了一个简化的接口，用于访问系统中的一组接口。外观模式将客户端与系统的内部子系统解耦，使得客户端只需要与外观对象进行交互。
* 子系统（Subsystems）：组成系统的各个类或模块，具有各自的接口和实现。外观对象将客户端的请求委派给子系统进行处理。
  
外观模式的目的是简化客户端与系统之间的交互，通过提供一个统一的接口，隐藏系统的复杂性。客户端只需要与外观对象进行交互，而无需直接与系统的各个子系统进行交互。
 */

// 子系统A
class SubsystemA {
  public operationA(): void {
    console.log("Subsystem A operation");
  }
}

// 子系统B
class SubsystemB {
  public operationB(): void {
    console.log("Subsystem B operation");
  }
}

// 子系统C
class SubsystemC {
  public operationC(): void {
    console.log("Subsystem C operation");
  }
}

// 外观类
class Facade {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;
  private subsystemC: SubsystemC;

  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  public operation(): void {
    console.log("Facade operation");

    // 调用子系统的操作方法
    this.subsystemA.operationA();
    this.subsystemB.operationB();
    this.subsystemC.operationC();
  }
}

// 创建外观对象
const facade = new Facade();

// 调用外观对象的操作方法，通过外观对象访问子系统的接口
facade.operation();


export {}