import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  
  dateMessage: string ;
  someNumber: number;

  constructor() { 
    setInterval(()=>{
      let currentDate=new Date();
      this.dateMessage= currentDate.toDateString() +"    "+currentDate.toLocaleTimeString();
    },1000);

    this.someNumber=6;
  }

  addNumbers(a: number,b: number){
    return a+b;
  }

  ngOnInit(): void {
  }

}
