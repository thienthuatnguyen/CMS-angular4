import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DemoService} from '../services/demo.service';
import {DataDemo} from '../models/demo.model';
import {error} from "util";

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.scss']
})
export class EmployeComponent implements OnInit, AfterViewInit {
  public users: any = [];
  public  num: number = 1;
  constructor(
    private demoService: DemoService,
  ) {}
  getUser() {
    let self = this;
    console.log(self.demoService.getDataUser());
    self.demoService.getDataUser1()
      .then((res: any) => {
        self.num = 3;
        if (res) {
          self.users = res;
          console.log(res);
        }
      }).then((res: any) => {
      self.num = self.num + 1;
      console.log(self.num);
    });
  }
  ngOnInit() {
    let self = this;
    self.getUser();
  }
  ngAfterViewInit() {
    //
  }
}
