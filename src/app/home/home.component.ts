import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  value: string;
  glag: boolean;
  chang: string;
  public agree = 0;
  public noagree = 0;
  public title = 'nguyen thien thuat';
  @ViewChild(ChildComponent)
  public ChildComponent: ChildComponent;
  ngOnInit() {
    this.value = 'a';
    this.glag = true;
    this.setname();

    let arr = [2,3,4,5,66,6,6,3]
  }
  ngAfterViewInit() {

    let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
    console.log(user);
    console.log(typeof (user))

    user = JSON.parse(user);
    user = JSON.stringify(user);
    console.log(user);
    console.log(user['name']);
    console.log(typeof (user));


  }

  fc(event) {
    console.log(event);
    this.chang = 'set';
    this.glag = !this.glag;
  }
  update(name: string) {
    this.title = name;
  }
  parentvote(a: boolean) {
    if (a) {
      this.agree = this.agree + 1;
    } else {
      this.noagree = this.noagree + 1;
    }
  }
  setname() {
    this.ChildComponent.setname('nguyen thien thuat');
  }

  
}
