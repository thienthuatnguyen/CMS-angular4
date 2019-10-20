import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { DataDemo } from '../models/demo.model';
import { error } from "util";
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'demo-test',
  templateUrl: './demoTest.component.html',
  styleUrls: ['./demoTest.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DemoTestComponent implements OnInit, AfterViewInit {
  public users: any = [];
  public num: number = 1;
  public rate: any = 0;
  public votedNum = 0;
  public dataImages: any = [

    {
      "id": "1",
      "name": "Name of image 1",
      "imageUrl": "../../assets/images/photo-1.jpg",
      "rated": 0

    },
    {
      "id": "2",
      "name": "Name of image 2",
      "imageUrl": "../../assets/images/photo-2.jpg",
      "rated": 0

    },
    {
      "id": "3",
      "name": "Name of image 3",
      "imageUrl": "../../assets/images/photo-3.jpg",
      "rated": 0

    },
    {
      "id": "4",
      "name": "Name of image 4",
      "imageUrl": "../../assets/images/photo-4.jpg",
      "rated": 0

    },
    {
      "id": "5",
      "name": "Name of image 5",
      "imageUrl": "../../assets/images/photo-5.jpg",
      "rated": 0

    },
    {
      "id": "6",
      "name": "Name of image 6",
      "imageUrl": "../../assets/images/photo-6.jpg",
      "rated": 0

    },
    {
      "id": "7",
      "name": "Name of image 7",
      "imageUrl": "../../assets/images/photo-7.jpg",
      "rated": 0

    },
    {
      "id": "8",
      "name": "Name of image 8",
      "imageUrl": "../../assets/images/photo-8.jpg",
      "rated": 0

    },
    {
      "id": "9",
      "name": "Name of image 9",
      "imageUrl": "../../assets/images/photo-9.jpg",
      "rated": 0

    },
    {
      "id": "10",
      "name": "Name of image 10",
      "imageUrl": "../../assets/images/photo-10.jpg",
      "rated": 0

    },
    {
      "id": "11",
      "name": "Name of image 11",
      "imageUrl": "../../assets/images/photo-11.jpg",
      "rated": 0

    },
    {
      "id": "12",
      "name": "Name of image 12",
      "imageUrl": "../../assets/images/photo-12.jpg",
      "rated": 0

    },
    {
      "id": "13",
      "name": "Name of image 13",
      "imageUrl": "../../assets/images/photo-13.jpg",
      "rated": 0

    },
    {
      "id": "14",
      "name": "Name of image 14",
      "imageUrl": "../../assets/images/photo-14.jpg",
      "rated": 0

    },
    {
      "id": "15",
      "name": "Name of image 15",
      "imageUrl": "../../assets/images/photo-15.jpg",
      "rated": 0

    },
    {
      "id": "16",
      "name": "Name of image 16",
      "imageUrl": "../../assets/images/photo-16.jpg",
      "rated": 0

    },
    {
      "id": "17",
      "name": "Name of image 17",
      "imageUrl": "../../assets/images/photo-17.jpg",
      "rated": 0

    },
    {
      "id": "18",
      "name": "Name of image 18",
      "imageUrl": "../../assets/images/photo-18.jpg",
      "rated": 0

    },
    {
      "id": "19",
      "name": "Name of image 19",
      "imageUrl": "../../assets/images/photo-19.jpg",
      "rated": 0

    },
    {
      "id": "20",
      "name": "Name of image 20",
      "imageUrl": "../../assets/images/photo-20.jpg",
      "rated": 0

    },
    {
      "id": "21",
      "name": "Name of image 21",
      "imageUrl": "../../assets/images/photo-21.jpg",
      "rated": 0

    },
    {
      "id": "22",
      "name": "Name of image 22",
      "imageUrl": "../../assets/images/photo-22.jpg",
      "rated": 0

    },
    {
      "id": "23",
      "name": "Name of image 23",
      "imageUrl": "../../assets/images/photo-23.jpg",
      "rated": 0

    },
    {
      "id": "24",
      "name": "Name of image 24",
      "imageUrl": "../../assets/images/photo-24.jpg",
      "rated": 0

    },
    {
      "id": "25",
      "name": "Name of image 25",
      "imageUrl": "../../assets/images/photo-25.jpg",
      "rated": 0

    },
    {
      "id": "26",
      "name": "Name of image 26",
      "imageUrl": "../../assets/images/photo-26.jpg",
      "rated": 0

    },
    {
      "id": "27",
      "name": "Name of image 27",
      "imageUrl": "../../assets/images/photo-27.jpg",
      "rated": 0

    },
    {
      "id": "28",
      "name": "Name of image 28",
      "imageUrl": "../../assets/images/photo-28.jpg",
      "rated": 0

    },
    {
      "id": "29",
      "name": "Name of image 29",
      "imageUrl": "../../assets/images/photo-29.jpg",
      "rated": 0

    },
    {
      "id": "30",
      "name": "Name of image 30",
      "imageUrl": "../../assets/images/photo-30.jpg",
      "rated": 0

    }
  ]
  constructor(


  ) { }

  ngOnInit() {
    if (localStorage.getItem('dataVoted')) {
      this.dataImages = JSON.parse(localStorage.getItem('dataVoted'))
    }
    else {
      localStorage.setItem('dataVoted', JSON.stringify(this.dataImages))
    }
  }
  ngAfterViewInit() {
    //
  }
  checkAllowVoted() {
    let votedNum = 0;
    for (let i = 0; i < this.dataImages.length; i++) {
      if (this.dataImages[i].rated > 0) {
        votedNum = votedNum + 1;
      }
    }
    if (votedNum > 10) {
      return false
    }
    else {
      return true
    }
  }
  onSelect(id, val) {
    console.log(this.checkAllowVoted())
    if (this.checkAllowVoted()) {
      for (let i = 0; i < this.dataImages.length; i++) {
        if (this.dataImages[i].id == id) {
          this.dataImages[i].rated = val
        }
      }
      localStorage.setItem('dataVoted', JSON.stringify(this.dataImages))
    }
    else {
      alert ('Max is 10 images for vote ')
      for (let i = 0; i < this.dataImages.length; i++) {
        if (this.dataImages[i].id == id) {
          this.dataImages[i].rated = 0
        }
      }
    }
   
    console.log(this.dataImages)

  }
  unVoted(id) {
    for (let i = 0; i < this.dataImages.length; i++) {
      if (this.dataImages[i].id == id) {
        this.dataImages[i].rated = 0
      }
    }
    localStorage.setItem('dataVoted', JSON.stringify(this.dataImages))
  }
}

