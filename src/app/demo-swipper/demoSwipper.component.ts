import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-demo-swipper',
  templateUrl: './demoSwipper.component.html',
  styleUrls: ['./demoSwipper.component.scss']
})
export class DemoSwipperComponent implements OnInit {
  config: any = {};
  ngOnInit() {
    let self = this;
    self.config  = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
    };
  }
}
