import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import {DemoSwipperComponent} from './demo-swipper/demoSwipper.component';
import {SwiperModule} from 'angular2-useful-swiper';
import {HomeComponent} from './home/home.component';
import {DemoBootstrapComponent} from './demo-bootstrap/demoBootstrap.component';
import {BsDatepickerModule} from 'ngx-bootstrap';
import {DemoApiComponent} from './demo-api/demoApi.component';
import {DemoService} from './services/demo.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ChildComponent} from './child/child.component';
import {ExponentialStrengthPipe} from './pipe/exponential-strength.pipe';
import {NotFoundComponent} from './404/notFound.component';
import {EmployeComponent} from './employe/employe.component';
import {EmployeDetailComponent} from './employe-detail/employe-detail.component';
import {EducationComponent} from './education/education.component';
import {ExprienceComponent} from './exprience/exprience.component';
import {EmployeEditComponent} from './employe-edit/employe-edit.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { DemoTestComponent } from './demo-test/demoTest.component';
import { BarRatingModule } from "ngx-bar-rating";
import { DemoTestWinnerComponent } from './demo-test-winner/demoTestWinner.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DemoSwipperComponent,
    HomeComponent,
    DemoBootstrapComponent,
    DemoApiComponent,
    ChildComponent,
    ExponentialStrengthPipe,
    NotFoundComponent,
    EmployeComponent,
    EmployeDetailComponent,
    EducationComponent,
    ExprienceComponent,
    EmployeEditComponent,
    DemoTestComponent,
    DemoTestWinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SwiperModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    BarRatingModule

  ],
  providers: [
    DemoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
