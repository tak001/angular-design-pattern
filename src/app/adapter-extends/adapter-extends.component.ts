import { Component, OnInit } from '@angular/core';
import { Print } from './print';
import { PrintBanner } from './print-banner';

@Component({
  selector: 'app-adapter-extends',
  templateUrl: './adapter-extends.component.html',
  styleUrls: ['./adapter-extends.component.css'],
})
export class AdapterExtendsComponent implements OnInit {
  p: Print = new PrintBanner('Hello');

  constructor() {}

  ngOnInit() {
    this.p.printWeak();
    this.p.printStrong();
  }
}
