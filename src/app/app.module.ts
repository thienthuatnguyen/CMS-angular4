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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DemoSwipperComponent,
    HomeComponent,
    DemoBootstrapComponent,
    DemoApiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SwiperModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: [
    DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
