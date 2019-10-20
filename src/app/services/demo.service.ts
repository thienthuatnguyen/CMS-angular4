import { Inject, Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DemoService  {
  apiEndpoint: string;
  apiEndpoint1: string;
  getUser: string;
  getDemoUrl: string;
  constructor(private http: HttpClient) {
    this.apiEndpoint = environment.apiUrl;
    this.apiEndpoint1 = environment.apiUrl1;
    this.getDemoUrl = '/posts/1';
    this.getUser = '/api/v1/users';
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
  getDataUser():  Observable<any> {
    let self = this;
    return this.http.get(self.apiEndpoint1 + self.getUser);
  }
  getDataUser1():  Promise<any> {
    let self = this;
    return this.http.get(self.apiEndpoint1 + self.getUser)
      .toPromise()
      .catch(self.handlePromiseError);
  }
  getDataUserDetail(id):  Observable<any> {
    let self = this;
    return this.http.get(self.apiEndpoint1 + self.getUser + '/' + id);
  }
  handlePromiseError(error: Response) {
    console.error(error);
    throw (error);
  }
  updateUser(id: number, data: any): Observable<any> {
    return this.http.put(this.apiEndpoint1 + id, data);
  }
  addUser(data: any): Observable<any> {
    return this.http.post(this.apiEndpoint1 , data);
  }
}
