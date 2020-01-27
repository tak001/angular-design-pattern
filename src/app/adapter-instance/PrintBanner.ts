import { Banner } from './Banner';
import { Print } from './Print';

export class PrintBanner extends Print {
  private banner: Banner;

  constructor(string: string) {
    super();
    // Bannerクラスのインスタンスを生成
    this.banner = new Banner(string);
  }

  printWeak(): void {
    // Bannerインスタンスを使って実装
    this.banner.showWithParen();
  }

  printStrong(): void {
    // Bannerインスタンスを使って実装
    this.banner.showWithAster();
  }
}
