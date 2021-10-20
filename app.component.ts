import { Component } from '@angular/core';

export class Value {
  constructor(
    public km: number,
    public age: number,
    public weight: number,
  ) {}
}

export class Company {
  constructor(
    public economy: number,
    public prod: number,
    public lux: number    
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  avia: Company = {
    economy:0,
    prod:0,
    lux:0
  }
  rjd: Company = {
    economy:0,
    prod:0,
    lux:0
  }
  value: Value = {
    km: 0,
    age: 0,
    weight: 0
  }

  collapse = 'collapse'
  result = 0
  payment() {
      this.avia.economy = this.special(4, 5, 4000, 20, 0, 0);
      this.avia.prod = this.special(8, 20, 5000, 50, 7, 30);
      this.avia.lux = this.special(15, 0, 0, 50, 16, 30);
      this.rjd.economy = this.special(0.5, 15, 50*this.value.weight, 50, 5, 50);
      this.rjd.prod = this.special(2, 20, 50*this.value.weight, 60, 8, 30);
      this.rjd.lux = this.special(4, 0, 0, 50, 16, 20);
  }

  special (a:number,b:number,c:number,d:number,e:number, f:number) {
    
    this.result = this.value.km * a
    
      if (this.value.age < e && this.value.age != 0) {
        this.result = this.result * (100 - f) / 100
        
      }
      if (d > this.value.weight &&  this.value.weight > b) {
        this.result += c
        
      }
      if (this.value.weight > d) {
        this.result = 0
      }
      return this.result
  }
}

