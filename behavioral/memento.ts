/**
 * 备忘录模式（Memento Pattern）是一种行为型设计模式，用于捕获对象的内部状态并在需要时进行恢复。它允许在不破坏封装性的前提下，捕获和保存对象的状态，以便将来可以恢复到该状态。

备忘录模式的核心思想是将对象的状态封装在备忘录对象中，并提供方法来保存和恢复状态。这样可以实现对象状态的快照和历史记录，同时避免了直接暴露对象的内部状态。

备忘录模式的关键点是：

* 发起人（Originator）：负责创建备忘录对象和从备忘录对象中恢复状态。发起人可以访问备忘录对象的内部状态。
* 备忘录（Memento）：存储发起人对象的内部状态。备忘录提供了对其内部状态的只读访问权限。
* 管理者（Caretaker）：负责保存和恢复备忘录对象。它不应该直接访问备忘录对象的内部状态。
 */

// 备忘录类
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

// 发起人类
class Originator {
  private state: string;

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  public restoreStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}

// 管理者类
class Caretaker {
  private memento: Memento;

  public saveMemento(memento: Memento): void {
    this.memento = memento;
  }

  public getMemento(): Memento {
    return this.memento;
  }
}

// 创建发起人对象
const originator: Originator = new Originator();

// 创建管理者对象
const caretaker: Caretaker = new Caretaker();

// 设置发起人对象的状态
originator.setState("State 1");

// 保存发起人对象的状态到备忘录
caretaker.saveMemento(originator.saveStateToMemento());

// 修改发起人对象的状态
originator.setState("State 2");

// 恢复发起人对象的状态
originator.restoreStateFromMemento(caretaker.getMemento());

console.log(originator.getState()); // 输出: State 1

// 扩充 undo 和 redo
(function(){
  // 备忘录类
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }
}

// 发起人类
class Originator {
  private state: string;

  public setState(state: string): void {
    this.state = state;
  }

  public getState(): string {
    return this.state;
  }

  public saveStateToMemento(): Memento {
    return new Memento(this.state);
  }

  public restoreStateFromMemento(memento: Memento): void {
    this.state = memento.getState();
  }
}

// 管理者类
class Caretaker {
  private mementos: Memento[];
  private currentMementoIndex: number;

  constructor() {
    this.mementos = [];
    this.currentMementoIndex = -1;
  }

  public saveMemento(memento: Memento): void {
    // 删除当前索引之后的备忘录，因为进行了新的操作
    this.mementos.splice(this.currentMementoIndex + 1);

    this.mementos.push(memento);
    this.currentMementoIndex++;
  }

  public undo(): Memento | null {
    if (this.currentMementoIndex > 0) {
      this.currentMementoIndex--;
      return this.mementos[this.currentMementoIndex];
    }

    return null;
  }

  public redo(): Memento | null {
    if (this.currentMementoIndex < this.mementos.length - 1) {
      this.currentMementoIndex++;
      return this.mementos[this.currentMementoIndex];
    }

    return null;
  }
}

// 创建发起人对象
const originator: Originator = new Originator();

// 创建管理者对象
const caretaker: Caretaker = new Caretaker();

// 设置发起人对象的状态
originator.setState("State 1");

// 保存发起人对象的状态到备忘录
caretaker.saveMemento(originator.saveStateToMemento());

// 修改发起人对象的状态
originator.setState("State 2");

// 保存发起人对象的状态到备忘录
caretaker.saveMemento(originator.saveStateToMemento());

// 执行撤销操作
const undoMemento = caretaker.undo();
if (undoMemento) {
  originator.restoreStateFromMemento(undoMemento);
}

console.log(originator.getState()); // 输出: State 1

// 执行重做操作
const redoMemento = caretaker.redo();
if (redoMemento) {
  originator.restoreStateFromMemento(redoMemento);
}

console.log(originator.getState()); // 输出: State 2

})()

export {}