import { Component, OnInit } from '@angular/core';
import { Print } from './print';
import { PrintBanner } from './print-banner';

@Component({
  selector: 'app-adapter-transfer',
  templateUrl: './adapter-transfer.component.html',
  styleUrls: ['./adapter-transfer.component.css'],
})
export class AdapterTransferComponent implements OnInit {
  p: Print = new PrintBanner('Hello');

  constructor() {}

  ngOnInit() {
    this.p.printWeak();
    this.p.printStrong();
  }
}
