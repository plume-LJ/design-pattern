/**
 * 单例模式（Singleton Pattern）是一种创建型设计模式，它保证一个类只有一个实例，并提供一个全局访问点来访问这个实例。

单例模式的关键点是：

* 私有化类的构造函数，使其不能被直接实例化。
* 提供一个静态方法或属性来获取类的唯一实例。
* 延迟实例化，即在第一次访问时才创建实例。
* 提供全局访问点，使其他代码可以方便地访问该实例。
*/

class Singleton {
  private static instance: Singleton;

  private constructor() {
    // 私有化构造函数，防止直接实例化
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public showMessage(): void {
    console.log("Hello, I am a singleton object.");
  }
}

// 获取单例实例
const singleton1: Singleton = Singleton.getInstance();
const singleton2: Singleton = Singleton.getInstance();

// 输出 "Hello, I am a singleton object."
singleton1.showMessage();
singleton2.showMessage();

// 判断两个实例是否相等
console.log(singleton1 === singleton2); // 输出 true
