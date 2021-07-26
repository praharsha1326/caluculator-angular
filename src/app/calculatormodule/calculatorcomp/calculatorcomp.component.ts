import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatorcomp',
  templateUrl: './calculatorcomp.component.html',
  styleUrls: ['./calculatorcomp.component.scss']
})
export class CalculatorcompComponent implements OnInit {

  constructor() { }

  input:string = '';
  result:string = '';

  clear(){
    //Deletes the last element of the string and displays from 0 to length_of_string - 1
    if (this.input != ""){
      this.input = this.input.substr(0, this.input.length-1);
    }
  }

  allClear() {
    //Changes both the string to ''
    this.result = '';
    this.input = '';
  }

  pressNum(num: string) {
    //Do not allow '.' more than once
    if (num==".") {
      if (this.input != ""){
        const lastNum = this.getLastOperand();
        //To check the last occurence of '.'
        console.log(lastNum.lastIndexOf("."));
        //If '.' is used more than once in a single operand than it will not return -1
        if (lastNum.lastIndexOf(".") >= 0) return;
      }
    }

    //Do not allow 0 at the beginning.
    //JS will throw octal literals are not allowed in strict mode
    if (num=="0"){
      if (this.input==""){
        return;
      }
    }

    //Appends the number to input string
    this.input = this.input + num;
    this.calcAnswer();
  }

  getLastOperand(){
    let pos: number;
    console.log(this.input);
    pos = this.input.toString().lastIndexOf("+");
    //If there is a decimal number after any operator it will start checking for double '.' after the operator and not form the start of the input string
    if (this.input.toString().lastIndexOf("-") > pos) pos = this.input.lastIndexOf("-");
    if (this.input.toString().lastIndexOf("*") > pos) pos = this.input.lastIndexOf("*");
    if (this.input.toString().lastIndexOf("/") > pos) pos = this.input.lastIndexOf("/");
    if (this.input.toString().lastIndexOf("%") > pos) pos = this.input.lastIndexOf("%");
    //Last is the string starting from the last operator used till the end
    console.log('Last '+ this.input.substr(pos+1));
    return this.input.substr(pos+1);
  }

  pressOperator(op: string){
    const lastKey = this.input[this.input.length -1];
    // To check if someone is using the operators two times like "+*" or "+-"
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '%'){
      return;
    }

    //Appending the operator to the input string
    this.input = this.input + op;
    this.calcAnswer();
  }

  calcAnswer() {
    let formula = this.input;
    let lastKey = formula[formula.length - 1];

    //if the lastKey is '.' and no number after that than only the number will be printed in the result
    if (lastKey === '.'){
      formula = formula.substr(0, formula.length-1);
    }

    lastKey = formula[formula.length - 1];

    //If the last key is nay operator then only the number before that will be returned
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.' || lastKey === '%'){
      formula = formula.substr(0, formula.length-1);
    }

    console.log("Formula "+formula);

    //The eval function takes the string converts it to a mathematical expression and calculates it
    this.result = eval(formula);
  }

  getAnswer() {
    //Gets called when '=' is pressed
    this.calcAnswer();
    this.input = this.result;
  }

  ngOnInit(): void {
  }

}