import { Inject, Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DemoService  {
  apiEndpoint: string;
  getDemoUrl: string;
  constructor(private http: HttpClient) {
    this.apiEndpoint = environment.apiUrl;
    this.getDemoUrl = '/posts/1';
    this.init();
  }
  init() {
    let self = this;
    self.getDemoData();

  }
  getDemoData(): any {
    let self = this;
    return this.http.get(self.apiEndpoint + self.getDemoUrl);
  }
}
