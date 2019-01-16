import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IUser } from '../interfaces/user';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class ProfileService {
  private addNewUserApi: string = 'http://localhost:53473/api/Profile/SaveProfile';
  private getUserDetailsApi: string = 'http://localhost:53473/api/Profile/GetUserProfileDetails';
  public user: IUser;
  constructor(private http: HttpClient) {

  }
  signUpUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.addNewUserApi, user);
  }

  getUserDetails(email: string): Observable<IUser> {
    const urlapi = `${this.getUserDetailsApi}/${email}`;
    //return this.http.get<IUser>(url);
    return this.http.get<IUser>(urlapi)
      .pipe(
        tap(data => console.log(JSON.stringify(data))));
  }

  //private extractData(response: Response) {
  //  let body = response.json();
  //  return body.data || {};
  //}

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
  }
}
