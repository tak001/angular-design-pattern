import { AbstractDisplay } from '../abstract-display/abstract-display'

// スーパークラスのAbstractDisplayクラスで抽象メソッドになっていたopen print closeが全て実装されている
// のでCharDisplayは抽象クラスではない
export class CharDisplay extends AbstractDisplay {   //AbstractDisplayのサブクラス
  private ch: string;
  constructor(ch: string) {
    super();
    this.ch = ch;
  }

  public open(): void {
    console.log('<<');
  }

  public print(): void {
    console.log(this.ch);
  }

  public close(): void {
    console.log('>>');
  }

}
