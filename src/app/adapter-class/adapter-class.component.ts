import { Component, OnInit } from '@angular/core';
import { Print } from './Print';
import { PrintBanner } from './PrintBanner';

@Component({
  selector: 'app-adapter-class',
  templateUrl: './adapter-class.component.html',
  styleUrls: ['./adapter-class.component.css'],
})
export class AdapterClassComponent implements OnInit {
  p: Print = new PrintBanner('Hello');

  constructor() {}

  ngOnInit() {
    this.p.printWeak();
    this.p.printStrong();
  }
}
