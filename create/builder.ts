/**
 * 建造者模式（Builder Pattern）是一种创建型设计模式，它将复杂对象的构建过程与其表示分离，使得同样的构建过程可以创建不同的表示。

建造者模式的关键点是：

* 定义一个抽象的建造者（Builder）接口，该接口声明了构建产品各个部分的方法。
* 定义一个具体的建造者（Concrete Builder）类，实现了抽象建造者接口，负责具体产品各个部分的构建。
* 定义一个指导者（Director）类，负责使用建造者对象来构建最终的产品。
* 定义一个产品（Product）类，表示最终构建的复杂对象。
*/
// 产品类
class Product {
  private parts: string[] = [];

  public addPart(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}`);
  }
}

// 抽象建造者接口
interface Builder {
  buildPartA(): void;
  buildPartB(): void;
  buildPartC(): void;
  getProduct(): Product;
}

// 具体建造者类
class ConcreteBuilder implements Builder {
  private product: Product;

  constructor() {
    this.reset();
  }

  public buildPartA(): void {
    this.product.addPart("Part A");
  }

  public buildPartB(): void {
    this.product.addPart("Part B");
  }

  public buildPartC(): void {
    this.product.addPart("Part C");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }

  private reset(): void {
    this.product = new Product();
  }
}

// 指导者类
class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public construct(): void {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
  }
}

// 创建指导者对象
const director = new Director();

// 创建具体建造者对象
const builder = new ConcreteBuilder();

// 设置具体建造者对象到指导者中
director.setBuilder(builder);

// 构建产品
director.construct();

// 获取最终构建的产品
const product = builder.getProduct();

// 输出产品的部件列表
product.listParts();
export {};