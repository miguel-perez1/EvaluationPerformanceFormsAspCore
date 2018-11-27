import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IUser } from '../interfaces/user';
@Injectable()
export class ProfileService {
  private addNewUserApi: string = 'http://localhost:53473/api/SampleData/AddNewUser';

  constructor(private http: HttpClient) {

  }
  signUpUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.addNewUserApi, user);
  }
}
