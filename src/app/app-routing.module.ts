import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoSwipperComponent} from './demo-swipper/demoSwipper.component';
import {HomeComponent} from './home/home.component';
import {DemoBootstrapComponent} from './demo-bootstrap/demoBootstrap.component';
import {DemoApiComponent} from './demo-api/demoApi.component';
const routes: Routes = [
  {
    path: 'demo-swipper',
    component: DemoSwipperComponent,
  },
  {
    path: 'demo-api',
    component: DemoApiComponent,
  },
  {
    path: 'demo-bootstrap',
    component: DemoBootstrapComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
