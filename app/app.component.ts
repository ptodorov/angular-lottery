import { Component } from '@angular/core';
import { Prize } from './models/Prize';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
})
export class AppComponent  {
  private firstColumnPrize: Prize;
  private secondColumnPrize: Prize;
  private thirdColumnPrize: Prize;

  private prizeList: Prize[] = [];

  private isReady: boolean = true;

  constructor() {
    this.prizeList.push(new Prize(1, "./app/assets/images/Jakey.png"));
    this.prizeList.push(new Prize(2, "./app/assets/images/Vesko.png"));
    this.prizeList.push(new Prize(3, "./app/assets/images/Jakey.png"));

    this.firstColumnPrize = this.prizeList[0];
    this.secondColumnPrize = this.prizeList[1];
    this.thirdColumnPrize = this.prizeList[2];
  }

  private wait(timeoutInMilliseconds: number) {
      return new Promise(resolve => setTimeout(resolve, timeoutInMilliseconds));
  }

  async startSlotMachine() {
      this.isReady = false;

      for (let i = 0; i < 10; i++) {
          this.firstColumnPrize = this.prizeList[Math.floor(Math.random() * 3)];
          this.secondColumnPrize = this.prizeList[Math.floor(Math.random() * 3)];
          this.thirdColumnPrize = this.prizeList[Math.floor(Math.random() * 3)];
          await this.wait(200);
      }

      this.isReady = true;
  }
}
