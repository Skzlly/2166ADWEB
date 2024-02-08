import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterms';
  time$: Observable<Date>;
  presentDate = new Date();
  a: number = 0.259;
  b: number = 1.3495;
  c: number = 1.3145;
  name = 'louis jae';

  object: Object = {lou: 'skully', jae: 'mob', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
  sup: Object = {greet: 'ayoo terry', hood: 'just... just gimme my moneyYyy'};
  wuzza: Object = {greet: 'wazaaaaa', hood: 'wazzup cuhh'};
  constructor(){
    this.time$ = interval (1000).pipe (map(()=> new Date()))
  }
  price:number = 20000; 
  Fruits= ["Apple","Orange","Grapes","Mango","Kiwi","Pomegranate"];


  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;
  decimalNum3: number = 29.141;
  ngOnInit(){

  }


}
