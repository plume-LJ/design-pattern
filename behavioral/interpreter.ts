/**
 * 解释器模式（Interpreter Pattern）是一种行为型设计模式，用于定义一种语言的文法，并解析和执行该语言中的表达式。

解释器模式的核心思想是将一个语言表达式表示为一个抽象语法树（Abstract Syntax Tree, AST），然后定义一组解释器来解析和执行这个语法树。

解释器模式的关键点是：

* 抽象表达式（Abstract Expression）：定义了一个抽象的解释操作方法。
* 终结符表达式（Terminal Expression）：实现了抽象表达式接口，并表示一个终结符表达式。
* 非终结符表达式（Non-terminal Expression）：实现了抽象表达式接口，并表示一个非终结符表达式，通常由多个终结符表达式组成。
* 上下文（Context）：包含解释器之外的一些全局信息。
 */

// 抽象表达式
interface Expression {
  interpret(context: Context): void;
}

// 终结符表达式
class TerminalExpression implements Expression {
  public interpret(context: Context): void {
    console.log("Terminal expression interpret");
  }
}

// 非终结符表达式
class NonterminalExpression implements Expression {
  private expressions: Expression[];

  constructor(expressions: Expression[]) {
    this.expressions = expressions;
  }

  public interpret(context: Context): void {
    console.log("Nonterminal expression interpret");
    for (const expression of this.expressions) {
      expression.interpret(context);
    }
  }
}

// 上下文
class Context {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  public getData(): string {
    return this.data;
  }
}

// 创建终结符表达式对象
const terminalExpression = new TerminalExpression();
// 创建非终结符表达式对象
const nonterminalExpression = new NonterminalExpression([terminalExpression]);

// 创建上下文对象
const context = new Context("Data");

// 解释器解析和执行表达式
terminalExpression.interpret(context);
nonterminalExpression.interpret(context);

(function () {
  // 抽象表达式接口
  interface Expression {
    interpret(): number;
  }

  // 终结符表达式 - 数字
  class NumberExpression implements Expression {
    private value: number;

    constructor(value: number) {
      this.value = value;
    }

    public interpret(): number {
      return this.value;
    }
  }

  // 非终结符表达式 - 加法
  class AddExpression implements Expression {
    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {
      this.expression1 = expression1;
      this.expression2 = expression2;
    }

    public interpret(): number {
      return this.expression1.interpret() + this.expression2.interpret();
    }
  }

  // 非终结符表达式 - 减法
  class SubtractExpression implements Expression {
    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {
      this.expression1 = expression1;
      this.expression2 = expression2;
    }

    public interpret(): number {
      return this.expression1.interpret() - this.expression2.interpret();
    }
  }

  // 非终结符表达式 - 乘法
  class MultiplyExpression implements Expression {
    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {
      this.expression1 = expression1;
      this.expression2 = expression2;
    }

    public interpret(): number {
      return this.expression1.interpret() * this.expression2.interpret();
    }
  }

  // 非终结符表达式 - 除法
  class DivideExpression implements Expression {
    private expression1: Expression;
    private expression2: Expression;

    constructor(expression1: Expression, expression2: Expression) {
      this.expression1 = expression1;
      this.expression2 = expression2;
    }

    public interpret(): number {
      return this.expression1.interpret() / this.expression2.interpret();
    }
  }

  // 创建终结符表达式对象
  const expression1: Expression = new NumberExpression(10);
  const expression2: Expression = new NumberExpression(5);

  // 创建非终结符表达式对象
  const addExpression: Expression = new AddExpression(expression1, expression2);
  const subtractExpression: Expression = new SubtractExpression(
    expression1,
    expression2
  );
  const multiplyExpression: Expression = new MultiplyExpression(
    expression1,
    expression2
  );
  const divideExpression: Expression = new DivideExpression(
    expression1,
    expression2
  );

  // 解释和执行表达式
  console.log(addExpression.interpret()); // 输出：15
  console.log(subtractExpression.interpret()); // 输出：5
  console.log(multiplyExpression.interpret()); // 输出：50
  console.log(divideExpression.interpret()); // 输出：2
})();

export {};
