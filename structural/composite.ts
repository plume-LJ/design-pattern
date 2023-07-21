/**
 * 组合模式（Composite Pattern）是一种结构型设计模式，用于将对象组合成树形结构以表示"部分-整体"的层次结构。组合模式使得用户可以以一致的方式处理单个对象和组合对象。

组合模式的关键点是：
  
* 组件（Component）：定义了组合对象和叶子对象的共同接口，可以是抽象类或接口，提供了默认的行为和管理子组件的方法。
* 叶子（Leaf）：表示组合中的叶子对象，没有子组件。
* 组合（Composite）：表示组合中的组合对象，可以包含子组件，并实现了组件接口的方法。
* 客户端（Client）：通过组件接口与组合对象进行交互，可以递归地遍历整个组合结构。
  
组合模式的目的是通过统一的方式处理单个对象和组合对象，使得客户端代码更加简洁和通用。通过组合模式，可以将复杂的对象结构组织成树形结构，并对整个结构进行统一的处理，例如遍历、搜索等操作。
 */
// 组件接口
interface Component {
  operation(): void;
}

// 叶子类
class Leaf implements Component {
  public operation(): void {
    console.log("Leaf operation");
  }
}

// 组合类
class Composite implements Component {
  private children: Component[] = [];

  public operation(): void {
    console.log("Composite operation");

    // 调用子组件的操作方法
    for (const child of this.children) {
      child.operation();
    }
  }

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}

// 创建叶子对象
const leaf1 = new Leaf();
const leaf2 = new Leaf();

// 创建组合对象
const composite1 = new Composite();
const composite2 = new Composite();

// 将叶子对象添加到组合对象中
composite1.add(leaf1);
composite2.add(leaf2);

// 将组合对象添加到另一个组合对象中
composite1.add(composite2);

// 调用组合对象的操作方法
composite1.operation();

// 透明模式 上面的是安全模式
(function () {
  // 组件接口
interface Component {
  operation(): void;
  add(component: Component): void;
  remove(component: Component): void;
}

// 叶子类
class Leaf implements Component {
  public operation(): void {
    console.log("Leaf operation");
  }

  public add(component: Component): void {
    // 叶子对象无法添加子组件，可以抛出异常或忽略该操作
  }

  public remove(component: Component): void {
    // 叶子对象无法移除子组件，可以抛出异常或忽略该操作
  }
}

// 组合类
class Composite implements Component {
  private children: Component[] = [];

  public operation(): void {
    console.log("Composite operation");

    // 调用子组件的操作方法
    for (const child of this.children) {
      child.operation();
    }
  }

  public add(component: Component): void {
    this.children.push(component);
  }

  public remove(component: Component): void {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }
}

// 创建叶子对象
const leaf1 = new Leaf();
const leaf2 = new Leaf();

// 创建组合对象
const composite1 = new Composite();
const composite2 = new Composite();

// 将叶子对象添加到组合对象中
composite1.add(leaf1);
composite2.add(leaf2);

// 将组合对象添加到另一个组合对象中
composite1.add(composite2);

// 调用组合对象的操作方法
composite1.operation();

})()

export {}