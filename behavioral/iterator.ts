/**
 * 迭代器模式（Iterator Pattern）是一种行为型设计模式，用于提供一种统一的方式来遍历集合对象中的元素，而无需暴露集合的内部表示。

迭代器模式的核心思想是将遍历集合的责任从集合对象中分离出来，交给一个独立的迭代器对象来处理。这样可以实现对集合元素的逐个访问，而不暴露集合的内部结构。

迭代器模式的关键点是：

* 迭代器接口（Iterator）：定义了访问和遍历集合元素的方法。
* 具体迭代器（ConcreteIterator）：实现了迭代器接口，负责具体的遍历逻辑。
* 集合接口（Iterable）：定义了获取迭代器的方法。
* 具体集合类（ConcreteIterable）：实现了集合接口，负责创建具体的迭代器对象。
 */

// 迭代器接口
interface Iterator<T> {
  hasNext(): boolean;
  next(): T;
}

// 集合接口
interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

// 具体迭代器
class ConcreteIterator<T> implements Iterator<T> {
  private collection: T[];
  private index: number;

  constructor(collection: T[]) {
    this.collection = collection;
    this.index = 0;
  }

  public hasNext(): boolean {
    return this.index < this.collection.length;
  }

  public next(): T {
    return this.collection[this.index++];
  }
}

// 具体集合类
class ConcreteIterableCollection<T> implements IterableCollection<T> {
  private collection: T[];

  constructor(collection: T[]) {
    this.collection = collection;
  }

  public createIterator(): Iterator<T> {
    return new ConcreteIterator<T>(this.collection);
  }
}

// 创建具体集合对象
const collection: IterableCollection<string> = new ConcreteIterableCollection<string>(["A", "B", "C"]);

// 获取迭代器
const iterator: Iterator<string> = collection.createIterator();

// 遍历集合元素
while (iterator.hasNext()) {
  console.log(iterator.next());
}


export {}