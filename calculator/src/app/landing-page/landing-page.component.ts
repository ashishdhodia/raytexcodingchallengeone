import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  input: string = '';
  result: string = '';
  inFlag = true;
  outFlag = true;


  clickNum(num: string) {
    if (this.input == "Cannot divide by zero!"){
      this.input = "";
    }
    if (num == "0") {
      const previousChar = this.input[this.input.length - 1];
      if (previousChar === '/') {
        this.input = "Cannot divide by zero!";
        return;
      }
    }

    if (num == ".") {
      const previousChar = this.input[this.input.length - 1];
      if (previousChar === '.') {
        return;
      }
    }
    this.inFlag = false;
    this.outFlag = false;
    this.input = this.input + num
    this.calcAnswer();
  }

  clickOperator(op: string) {
    const endChar = this.input[this.input.length - 1];
    if (endChar === '/' || endChar === '*' || endChar === '-' || endChar === '+') {
      return;
    }
    this.input = this.input + op
    this.calcAnswer();
  }


  clear() {
    // console.log("click");
    
    if (this.input == "Cannot divide by zero!"){
      this.input = "";
    }
    if (this.input != "") {
      this.input = this.input.substring(0, this.input.length - 1)
    }
    if (this.input == "") {
      this.result = "";
      this.inFlag = true;
      this.outFlag = true;
    }
  }

  allClear() {
    this.result = '';
    this.input = '';
    this.inFlag = true;
    this.outFlag = true;
  }

  calcAnswer() {
    let expString = this.input;
    let endChar = expString[expString.length - 1];
    if (endChar === '.') {
      expString = expString.substring(0, expString.length - 1);
    }
    endChar = expString[expString.length - 1];
    if (endChar === '/' || endChar === '*' || endChar === '-' || endChar === '+' || endChar === '.') {
      expString = expString.substring(0, expString.length - 1);
    }
    // console.log("expString " + expString);
    this.result = eval(expString);
  }

  getAnswer() {
    this.calcAnswer();
    this.input = this.result;
    if (this.input != "") {
      this.input = "";
      this.inFlag = true;
      this.outFlag = false;
    }
  }



  ngOnInit(): void {
  }

}
