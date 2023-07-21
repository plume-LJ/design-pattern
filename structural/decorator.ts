/**
 * 装饰者模式（Decorator Pattern）是一种结构型设计模式，它允许你通过将对象包装在装饰器对象中来动态地为原始对象添加新的行为。装饰者模式提供了一种比继承更灵活的方式来扩展对象的功能。

装饰者模式的关键点是：

* 组件（Component）：定义了一个对象接口，可以给这些对象动态地添加职责。
* 具体组件（Concrete Component）：实现了组件接口的具体对象，即被装饰的原始对象。
* 装饰器（Decorator）：持有一个组件对象的引用，并实现了组件接口，可以在调用组件对象的方法前后添加额外的行为。
* 具体装饰器（Concrete Decorator）：具体的装饰器类，通过扩展装饰器类来添加新的行为。
 */
// 组件接口
interface Component {
  operation(): void;
}

// 具体组件类
class ConcreteComponent implements Component {
  public operation(): void {
    console.log("Concrete Component operation");
  }
}

// 装饰器类
class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): void {
    console.log("Decorator operation");
    this.component.operation();
  }
}

// 具体装饰器类A
class ConcreteDecoratorA extends Decorator {
  public operation(): void {
    console.log("Concrete Decorator A operation");
    super.operation();
  }
}

// 具体装饰器类B
class ConcreteDecoratorB extends Decorator {
  public operation(): void {
    console.log("Concrete Decorator B operation");
    super.operation();
    this.additionalOperation();
  }

  private additionalOperation(): void {
    console.log("Additional operation");
  }
}

// 创建具体组件对象
const component = new ConcreteComponent();

// 创建具体装饰器对象A，并将具体组件对象传入
const decoratorA = new ConcreteDecoratorA(component);

// 调用装饰器对象A的操作方法
decoratorA.operation();

// 创建具体装饰器对象B，并将具体装饰器对象A传入
const decoratorB = new ConcreteDecoratorB(decoratorA);

// 调用装饰器对象B的操作方法
decoratorB.operation();



export {}