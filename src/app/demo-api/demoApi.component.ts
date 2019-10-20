import {Component, OnInit} from '@angular/core';
import {DemoService} from '../services/demo.service';
import {DataDemo} from '../models/demo.model';

@Component({
  selector: 'app-demo-api',
  templateUrl: './demoApi.component.html',
  styleUrls: ['./demoApi.component.scss']
})
export class DemoApiComponent implements OnInit {
  dataDemo: DataDemo = new DataDemo();
  id: any;
  constructor(
    private demoService: DemoService,
  ) {}
  getData() {
    let self = this;
    self.demoService.getDemoData().subscribe((res: any) => {
      if (res) {
        if (res.id !== null) {
          self.dataDemo.id = res.id;
        }
        self.dataDemo.title = res.title;
        self.dataDemo.userId = res.userId;
        self.id = res.id;
      }
    });
  }
  getUser() {
    let self = this;
    console.log(self.demoService.getDataUser());
    self.demoService.getDataUser().subscribe((res: any) => {
      if (res) {
        console.log(res);
      }
    });
  }
  ngOnInit() {
    let self = this;
    self.getData();
    self.getUser();
  }
}
