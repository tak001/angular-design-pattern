import { Component, OnInit } from '@angular/core';
import { Print } from './Print';
import { PrintBanner } from './PrintBanner';

@Component({
  selector: 'app-adapter-implements',
  templateUrl: './adapter-implements.component.html',
  styleUrls: ['./adapter-implements.component.css'],
})
export class AdapterImplementsComponent implements OnInit {
  p: Print = new PrintBanner('Hello');

  constructor() {}

  ngOnInit() {
    this.p.printWeak();
    this.p.printStrong();
  }
}
