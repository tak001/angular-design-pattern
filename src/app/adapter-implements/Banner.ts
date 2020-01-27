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
