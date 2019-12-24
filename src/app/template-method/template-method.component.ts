import { Component, OnInit } from '@angular/core';
import { CharDisplay } from './char-display/char-display'
import { StringDisplay } from './string-display/string-display'

@Component({
  selector: 'app-template-method',
  templateUrl: './template-method.component.html',
  styleUrls: ['./template-method.component.css']
})
export class TemplateMethodComponent implements OnInit {
  charDisplay: CharDisplay;
  stringDisplay: StringDisplay;
  stringDisplayJapanise: StringDisplay;


  constructor() { }

  ngOnInit() {
    this.charDisplay = new CharDisplay('H');
    this.stringDisplay = new StringDisplay('Hello, world.');
    this.stringDisplayJapanise = new StringDisplay('こんにちは。');

    this.display();
  }

  display() {
    this.charDisplay.display();
    this.stringDisplay.display();
    this.stringDisplayJapanise.display();
  }


}
