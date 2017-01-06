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
  private chanceToWin: number = 1;
  private fixedPrizeIndex: number = 0;
  private message: string;

  constructor() {
    this.prizeList.push(new Prize(1, "./app/assets/images/Pen.jpg", "Честито, вие спечелихте комплект книжки за оцветяване и флумастери!"));
    this.prizeList.push(new Prize(2, "./app/assets/images/Dragana.jpg", "Честито, вие спечелихте албум на Драгана Миркович!"));
    this.prizeList.push(new Prize(3, "./app/assets/images/Jakey.png", "Честито, вие спечелихте ваучер за 10 безплатни срещи с Джейк!"));

    this.firstColumnPrize = this.prizeList[0];
    this.secondColumnPrize = this.prizeList[1];
    this.thirdColumnPrize = this.prizeList[2];
  }

  private wait(timeoutInMilliseconds: number) {
      return new Promise(resolve => setTimeout(resolve, timeoutInMilliseconds));
  }

  private wins() {
      return this.firstColumnPrize == this.secondColumnPrize && this.secondColumnPrize == this.thirdColumnPrize;
  }

  async startSlotMachine() {
      this.isReady = false;

      for (let i = 0; i < 10; i++) {
          this.firstColumnPrize = this.prizeList[Math.floor(Math.random() * 3)];
          this.secondColumnPrize = this.prizeList[Math.floor(Math.random() * 3)];
          this.thirdColumnPrize = this.prizeList[Math.floor(Math.random() * 3)];
          await this.wait(200);
      }

      if (Math.random() < this.chanceToWin && !this.wins()) {
          this.firstColumnPrize = this.prizeList[this.fixedPrizeIndex];
          this.secondColumnPrize = this.prizeList[this.fixedPrizeIndex];
          this.thirdColumnPrize = this.prizeList[this.fixedPrizeIndex];
      } else if (Math.random() >= this.chanceToWin && this.wins()) {
          this.firstColumnPrize = this.prizeList[2];
          this.secondColumnPrize = this.prizeList[2];
          this.thirdColumnPrize = this.prizeList[1];
      }

      if (this.wins()) {
          this.message = this.firstColumnPrize.message;
          this.fixedPrizeIndex++;
      }

      if (this.fixedPrizeIndex) {
          this.isReady = true;
      }
  }
}
