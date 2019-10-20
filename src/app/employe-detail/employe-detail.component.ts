import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {DemoService} from "../services/demo.service";

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.scss']
})
export class EmployeDetailComponent implements OnInit, OnDestroy{
  public _id: number;
  public subscription: Subscription;
  public user: any = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private demoService: DemoService
  ) {}
  ngOnInit() {
    // let self = this;
    // this.subscription = this.activatedRoute.params.subscribe(param => {
    //   this._id = param['id'];
    //   self.demoService.getDataUserDetail(self._id)
    //     .subscribe((res: any) => {
    //       if (res) {
    //       self.user = res;
    //       console.log(res);
    //       }
    //     }, error => {
    //         console.log(error);
    //     });
    // });
    this.getUser().then((onSuccess: any)=> {
          console.log(onSuccess)
    }).then(()=>{
      console.log('error')
    })
   
  }
  async printUser() {
      let user = await this.getUser();
  }
  getUser() {
    let selt = this;
    return new Promise((resolve, reject)=>{
      selt.demoService.getDataUserDetail(1)
      .subscribe((res: any)=> {
          if(res) {
            return resolve(res)
          }
      }, err => {
          return reject(err)
      })

    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
