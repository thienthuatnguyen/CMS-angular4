import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {DemoService} from '../services/demo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employe-edit',
  templateUrl: './employe-edit.component.html',
  styleUrls: ['./employe-edit.component.scss'],

})
export class EmployeEditComponent implements OnInit, OnDestroy {
  public _id: number;
  public subscription: Subscription;
  public user: any = [];
  form: FormGroup;
  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private demoService: DemoService
  ) {
    this.form = fb.group({
        first: ['', Validators.minLength(2)],
        last: ['', Validators.required],
      email: '',
    });
  }
  ngOnInit() {
    console.log(this.form.value);
  }
  ngOnDestroy() {
  }
  saveUser(data: any) {
    this.demoService.addUser(data).subscribe((res: Response) => {
      console.log('done');
    });
  }
}
