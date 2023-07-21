/**
 * 原型模式（Prototype Pattern）是一种创建型设计模式，它通过复制（克隆）现有对象来创建新的对象，而不是通过使用构造函数来创建。

原型模式的关键点是：

* 定义一个抽象原型类或接口，该原型类或接口声明了一个克隆方法（Clone）。
* 在具体原型类中实现克隆方法，该方法会返回一个新的对象，该对象是当前对象的副本。
* 在客户端代码中，通过调用原型对象的克隆方法来创建新的对象，而不是使用构造函数。
  
原型模式的主要思想是通过复制已有对象的属性和状态来创建新的对象，从而避免了使用构造函数进行对象的创建和初始化。这种方式也可以减少对象的创建成本，特别是当对象的创建过程较为复杂或耗时时。
 */
// 抽象原型类
abstract class Prototype {
  abstract clone(): Prototype;
  abstract getProperty(): string;
}

// 具体原型类
class ConcretePrototype extends Prototype {
  private property: string;

  constructor(property: string) {
    super();
    this.property = property;
  }

  public clone(): Prototype {
    return new ConcretePrototype(this.property);
  }

  public getProperty(): string {
    return this.property;
  }
}

// 创建原型对象
const prototype = new ConcretePrototype("property value");

// 克隆原型对象
const clone1 = prototype.clone();
const clone2 = prototype.clone();

// 输出克隆对象的属性值
console.log(clone1.getProperty()); // 输出 "property value"
console.log(clone2.getProperty()); // 输出 "property value"

// 判断克隆对象和原型对象是否相等
console.log(clone1 === prototype); // 输出 false
console.log(clone2 === prototype); // 输出 false
console.log(clone2 === clone1); // 输出 false


export {}