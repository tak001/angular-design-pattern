import { Product } from './product';

export class IdCard extends Product {
  readonly owner: string;

  constructor(owner: string) {
    super();
    console.log(owner + 'のカードを作ります。');
    this.owner = owner;
  }

  use(): void {
    console.log(this.owner + 'のカードを使います。');
  }
  getowner(): string {
    return this.owner;
  }
}
