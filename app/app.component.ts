import { Component } from '@angular/core';
import { Prize } from './models/Prize';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent  {
  private firstSelectedValue: number = 1;
  private secondSelectedValue: number = 1;
  private thirdSelectedValue: number = 1;

  private prizeList: Prize[];

  constructor() {
    this.prizeList.push(new Prize(1, "./app/assets/images/Jakey.png"));
    this.prizeList.push(new Prize(2, "./app/assets/images/Vesko.png"));
    this.prizeList.push(new Prize(3, "./app/assets/images/Jakey.png"));
  }

  private wait(timeoutInMilliseconds: number) {
      return new Promise(resolve => setTimeout(resolve, timeoutInMilliseconds));
  }

  async startSlotMachine() { 
      for (let i = 0; i < 10; i++) {
          this.firstSelectedValue = Math.floor(Math.random() * 3 + 1);
          this.secondSelectedValue = Math.floor(Math.random() * 3 + 1);
          this.thirdSelectedValue = Math.floor(Math.random() * 3 + 1);
          await this.wait(200);
      }
  }
}
