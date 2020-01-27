import { Component, OnInit } from '@angular/core';
import { Print } from './Print';
import { PrintBanner } from './PrintBanner';

@Component({
  selector: 'app-adapter-instance',
  templateUrl: './adapter-instance.component.html',
  styleUrls: ['./adapter-instance.component.css'],
})
export class AdapterInstanceComponent implements OnInit {
  p: Print = new PrintBanner('Hello');

  constructor() {}

  ngOnInit() {
    this.p.printWeak();
    this.p.printStrong();
  }
}
