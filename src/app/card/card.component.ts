import { Component, OnInit } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userInput: string = "";
  sentence: string = lorem.sentence();
  color: string = "color:black";

  showSuccess() {
    return this.sentence == this.userInput;
  }

  onInput(event: any) {
    this.userInput = event.target.value;
  }

  setColorByInput(i: number) {
    if (this.userInput[i] == this.sentence[i]) {
      return "color:green";
    }

    if ((this.userInput[i] != this.sentence[i]) && i<this.userInput.length) {
      return "color:red; font-weight:bold;"; 
    }

    return "color: black;"
  }
}