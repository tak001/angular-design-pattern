/*
 * 既存のプログラムと仮定しているクラス。
 * MainはshowWithParen()やshowWithAster()メソッドは使いたいけど
 * そのメソッドのままでは使いたくない状態。
 */
export class Banner {
  private string_: string;

  constructor(string: string) {
    this.string_ = string;
  }

  showWithParen(): void {
    console.log(`(${this.string_})`);
  }

  showWithAster(): void {
    console.log(`*${this.string_}*`);
  }
}
