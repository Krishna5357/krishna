import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.scss']
})
export class CoffeeComponent implements OnInit {
  preference:string;

  constructor() { }

  ngOnInit() {
  }
  detailsFormFun(value: any) {
    console.log(value, this.preference)
    console.log(typeof this.preference)
    if (this.preference == "yes") {
      alert("Glad to know you like Coffee!!")
      this.preference=""
    }
    else if (this.preference == "no") {
      alert("Thank you for updating your preference.")
      this.preference=""
    }
    else {
      alert("Please select a value.")
    }
  }
}
