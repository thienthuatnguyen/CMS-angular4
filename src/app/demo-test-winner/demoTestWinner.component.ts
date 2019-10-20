import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { DataDemo } from '../models/demo.model';
import { error } from "util";
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'demo-test-winner',
  templateUrl: './demoTestWinner.component.html',
  styleUrls: ['./demoTestWinner.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DemoTestWinnerComponent implements OnInit {
  public users: any = [];
  public num: number = 1;
  public rate: any = 0;
  public votedNum = 0;
  public dataImages: any = []
  constructor(
  ) { }

  ngOnInit() {
    if (localStorage.getItem('dataVoted')) {
      this.dataImages = JSON.parse(localStorage.getItem('dataVoted'))
      this.dataImages = this.dataImages.filter((el)=> { return el.rated > 0})
      this.dataImages = this.dataImages.sort((a,b) => b.rated - a.rated).slice(0,6);
      console.log(this.dataImages)
    }
  }
}

