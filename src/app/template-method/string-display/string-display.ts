import { AbstractDisplay } from '../abstract-display/abstract-display'

export class StringDisplay extends AbstractDisplay {
  private string: string;
  private width: number;

  constructor(string: string) {
    super();
    this.string = string;
    this.width = string.length;
  }

  public open(): void {
    this.printLine();
  }

  public print(): void {
    console.log('|' + this.string + '|');
  }

  public close(): void {
    this.printLine();
  }

  private printLine(): void {
    console.log('+');
    for (let i = 0; i < this.width; i++){
      console.log('-');
    }
    console.log('+');
  }
}
