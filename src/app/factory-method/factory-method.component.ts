import { Component, OnInit } from '@angular/core';
import { Factory } from './factory';
import { IdCardFactory } from './id-card-factory';
import { Product } from './product';

@Component({
  selector: 'app-factory-method',
  templateUrl: './factory-method.component.html',
  styleUrls: ['./factory-method.component.css'],
})
export class FactoryMethodComponent implements OnInit {
  factory: Factory = new IdCardFactory();

  card1: Product = this.factory.create('やまだ');
  card2: Product = this.factory.create('すずき');
  card3: Product = this.factory.create('さとう');

  constructor() {}

  ngOnInit() {
    this.card1.use();
    this.card2.use();
    this.card3.use();
  }
}
