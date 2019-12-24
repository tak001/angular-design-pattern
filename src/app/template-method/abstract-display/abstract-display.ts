// メソッドdisplayのみ実装されている抽象クラス
// AbstractDisplayクラスを見ただけではdisplayが何をするかわからない
// 実際に何をするかは、open print closeを実装するサブクラスに任されている
export abstract class AbstractDisplay {
  protected abstract open(): void;   //サブクラスに実装を任せる抽象メソッド1
  protected abstract print(): void;  //サブクラスに実装を任せる抽象メソッド2
  protected abstract close(): void;  //サブクラスに実装を任せる抽象メソッド3

  //このクラスで実装しているメソッド
  public display() {
    this.open();
    for (let i = 0; i < 5; i++) {
      this.print();
    }
    this.close();
  }
}
