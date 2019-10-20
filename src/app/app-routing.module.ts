import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DemoSwipperComponent} from './demo-swipper/demoSwipper.component';
import {HomeComponent} from './home/home.component';
import {DemoBootstrapComponent} from './demo-bootstrap/demoBootstrap.component';
import {DemoApiComponent} from './demo-api/demoApi.component';
import {NotFoundComponent} from './404/notFound.component';
import {EmployeComponent} from './employe/employe.component';
import {EmployeDetailComponent} from './employe-detail/employe-detail.component';
import {EducationComponent} from "./education/education.component";
import {ExprienceComponent} from "./exprience/exprience.component";
import {EmployeEditComponent} from "./employe-edit/employe-edit.component";
import { DemoTestComponent } from './demo-test/demoTest.component';
import { DemoTestWinnerComponent } from './demo-test-winner/demoTestWinner.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
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
    path: 'employe',
    component: EmployeComponent,
  },
  {
    path: 'employe-edit',
    component: EmployeEditComponent,
  },
  {
    path: 'demo-test',
    component: DemoTestComponent,
  },
  {
    path: 'demo-test-winner',
    component: DemoTestWinnerComponent,
  },
  {
    path: 'employe-detail/:id',
    component: EmployeDetailComponent,
    children: [
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'exprience',
        component: ExprienceComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent,
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
