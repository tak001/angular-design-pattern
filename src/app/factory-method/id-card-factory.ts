import { Factory } from './factory';
import { IdCard } from './id-card';
import { Product } from './product';

export class IdCardFactory extends Factory {
  readonly owners: string[] = [];

  protected createProduct(owner: string): Product {
    return new IdCard(owner);
  }
  protected registerProduct(product: Product): void {
    this.owners.push((<IdCard>product).owner);
  }
  getOwners(): string[] {
    return this.owners;
  }
}
