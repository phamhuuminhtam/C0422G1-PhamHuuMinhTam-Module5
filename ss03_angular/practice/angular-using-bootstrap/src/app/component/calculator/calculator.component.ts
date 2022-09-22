import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number;
  number2: number;
  operator: string;

  cal(number1: number, number2: number, operator: string): string {
    switch (operator) {
      case '+':
        return (number1 / 1 + number2 / 1) +"";

      case '-':
        return number1 - number2 +"";

      case '*':
        return number1 * number2 +"";

      case '/':
        if (number2 == 0) {
          return 'Cannot div 0!!!!';
        } else {
          return number1 / number2 +"";
        }
     }
  }

  constructor() {
  }

  ngOnInit(): void {
  }
  getNumber1(value:number){
    this.number1=value;
  }

}
