import { Component, OnInit } from '@angular/core';
import PageMaker from './PageMaker';

@Component({
  selector: 'app-facade',
  templateUrl: './facade.component.html',
  styleUrls: ['./facade.component.css'],
})
export class FacadeComponent implements OnInit {
  readonly pageMaker = PageMaker;
  constructor() {}

  ngOnInit() {
    this.pageMaker.makeWelcomePage('db1');
  }
}
