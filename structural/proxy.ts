/**
 * 代理模式（Proxy Pattern）是一种结构型设计模式，它允许通过代理对象控制对真实对象的访问。代理模式在不改变原始对象的情况下，提供了一种间接访问对象的方式。

代理模式的关键点是：

* 抽象主题（Subject）：定义了真实主题和代理主题的共同接口，客户端通过这个接口访问真实主题。
* 真实主题（Real Subject）：定义了真正的对象，代理对象所代表的真实对象。
* 代理（Proxy）：持有一个对真实主题的引用，并提供了与真实主题相同的接口，可以在调用真实主题的方法前后添加额外的逻辑。

代理模式可以用于以下情况：

* 远程代理（Remote Proxy）：用于访问位于远程服务器上的对象。
* 虚拟代理（Virtual Proxy）：用于延迟加载对象的创建，直到真正需要使用时才去创建。
* 保护代理（Protection Proxy）：用于控制对对象的访问权限。
* 缓存代理（Caching Proxy）：用于提供对象的缓存，减少对真实对象的访问次数。
 */

// 抽象主题
interface Subject {
  request(): void;
}

// 真实主题
class RealSubject implements Subject {
  public request(): void {
    console.log("RealSubject request");
  }
}

// 代理
class Proxy implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void {
    console.log("Proxy request");

    // 在调用真实主题的方法前后添加额外的逻辑
    console.log("Before realSubject request");
    this.realSubject.request();
    console.log("After realSubject request");
  }
}

// 创建真实主题对象
const realSubject = new RealSubject();

// 创建代理对象，并将真实主题对象传入
const proxy = new Proxy(realSubject);

// 调用代理对象的方法，通过代理对象访问真实主题
proxy.request();


export {}