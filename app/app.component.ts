import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  count:number = 10;
  clock:string = "";
  year:string = "";
  month:number;
  day:string = "";
  msec:string = "";
  sec:string = "";
  min:string = "";
  hr:string = "";
  ngOnInit(){
    const X  = setInterval(() =>{
      if(this.count>0){
        this.count = this.count-1;
      }
      else{
        clearInterval(X)
      }
    },1000);
    setInterval(() =>{
      this.year = new Date().getFullYear().toString();
      this.month = new Date().getMonth()+1;
      this.day = new Date().getDate().toString();
    });
    setInterval(() => {
    this.clock = new Date().toLocaleString();
    this.sec = new Date().getSeconds().toString();
    if(this.sec.length === 1){
      this.sec = '0'.concat(this.sec);
    }
    this.min = new Date().getMinutes().toString();
    if(this.min.length === 1){
      this.min = '0'.concat(this.min);
    }
    this.hr = new Date().getHours().toString();
    if(this.hr.length === 1){
      this.hr = '0'.concat(this.hr);
    }
    },1000);
    setInterval(() => {
    this.msec = new Date().getMilliseconds().toString();
    if(this.msec.length === 1){
      this.msec = '0'.concat(this.msec);
    }
    },1)
  }
}
