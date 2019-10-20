import {AfterViewInit, Component, OnInit, Input, Output, ViewChild, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {
  @Input() name: string;
  @Output() onvote = new EventEmitter <boolean>();
  public voted: boolean = false;
  public name_n: string = 'thuat';

  ngOnInit() {
  }
  ngAfterViewInit() {
  }
  vote(a: boolean) {
    this.voted = true;
    this.onvote.emit(a);
  }
  setname(name) {
    this.name_n = this.name;
  }
}
