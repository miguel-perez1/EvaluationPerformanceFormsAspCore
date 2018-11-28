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
  private getUserDetailsApi: string = 'http://localhost:53473/api/GetUserProfileDetails';
  public user: IUser;
  constructor(private http: HttpClient) {

  }
  signUpUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.addNewUserApi, user);
  }

  getUserDetails(email: string){
    const url = `${this.getUserDetailsApi}/${email}`;
    return this.http.get<IUser>(url).subscribe(result => {
      this.user = result;
    }, error => console.error(error));

  }
}
