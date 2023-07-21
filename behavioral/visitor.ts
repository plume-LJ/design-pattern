/**
 * 访问者模式（Visitor Pattern）是一种行为型设计模式，用于将算法操作从被操作的对象中分离出来。它允许在不修改对象结构的情况下定义新的操作。

访问者模式的核心思想是将算法操作封装在访问者类中，而被访问的元素类提供一个接受访问者的方法。通过这种方式，元素类可以接受不同的访问者并执行相应的操作，而不需要改变自身的结构。

访问者模式的关键点是：

* 抽象访问者（Visitor）：定义了访问者的接口，包含了一组访问不同元素的方法，每个方法对应一个具体元素类。
* 具体访问者（Concrete Visitor）：实现了抽象访问者接口，提供了对元素的具体操作。
* 抽象元素（Element）：定义了接受访问者的方法，该方法接受一个访问者对象作为参数。
* 具体元素（Concrete Element）：实现了抽象元素接口，提供了接受访问者的具体实现。
* 对象结构（Object Structure）：包含了一组元素对象，并提供了遍历元素的方法。
 */

// 抽象访问者
interface Visitor {
  visitElementA(element: ElementA): void;
  visitElementB(element: ElementB): void;
}

// 具体访问者
class ConcreteVisitor implements Visitor {
  public visitElementA(element: ElementA): void {
    console.log("Visitor visits ElementA");
    // 具体操作针对 ElementA
  }

  public visitElementB(element: ElementB): void {
    console.log("Visitor visits ElementB");
    // 具体操作针对 ElementB
  }
}

// 抽象元素
interface Element {
  accept(visitor: Visitor): void;
}

// 具体元素 A
class ElementA implements Element {
  public accept(visitor: Visitor): void {
    visitor.visitElementA(this);
  }
}

// 具体元素 B
class ElementB implements Element {
  public accept(visitor: Visitor): void {
    visitor.visitElementB(this);
  }
}

// 对象结构
class ObjectStructure {
  private elements: Element[];

  constructor() {
    this.elements = [];
  }

  public addElement(element: Element): void {
    this.elements.push(element);
  }

  public accept(visitor: Visitor): void {
    for (const element of this.elements) {
      element.accept(visitor);
    }
  }
}

// 创建具体访问者和具体元素
const visitor: Visitor = new ConcreteVisitor();
const elementA: Element = new ElementA();
const elementB: Element = new ElementB();

// 创建对象结构
const objectStructure: ObjectStructure = new ObjectStructure();
objectStructure.addElement(elementA);
objectStructure.addElement(elementB);

// 对象结构接受访问者
objectStructure.accept(visitor);


export {}