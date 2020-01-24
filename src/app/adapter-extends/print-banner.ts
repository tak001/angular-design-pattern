import { Banner } from './banner';
import { Print } from './print';

/* 
* Printインターフェースを実装して、Bannerクラスを継承。
* Mainから使いやすい状態になるようにしている。
* このパターンの心臓部。
*/
export class PrintBanner extends Banner implements Print {
  constructor(string: string) {
    super(string);
  }

  printWeak() {
    this.showWithParen();
  }

  printStrong() {
    this.showWithAster();
  }
}
