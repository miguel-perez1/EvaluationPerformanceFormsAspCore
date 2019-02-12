import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IExecutiveForm } from '../interfaces/executive-form';
import { Catcher } from '../models/catcher';
import { tap } from 'rxjs/operators';

@Injectable()
export class ExecutiveFormService {
  private addNewExecutiveFormApi: string = 'http://localhost:53473/api/ExecutiveForm/SaveNewExecutiveForm';
  private findByIdApi: string = 'http://localhost:53473/api/ExecutiveForm/GetById';

  constructor(private http: HttpClient) {

  }
  saveExecutiveForm(executive: IExecutiveForm): Observable<IExecutiveForm> {
    return this.http.post<IExecutiveForm>(this.addNewExecutiveFormApi, executive);
  }

  getFormById(id: number): Observable<IExecutiveForm> {
    const url = `${this.findByIdApi}/${id}`
    return this.http.get<IExecutiveForm>(url)
      .pipe(
        tap(data => console.log(JSON.stringify(data))));
  }
  //private createExecutiveForm(executive: IExecutiveForm, options: RequestOptions): Observable<IExecutiveForm> {
  //  executive.id = undefined;
  //  return this.http.post(this.baseUrl, executive, options)
  //    .map(this.extractData)
  //    .do(data => console.log('createExecutiveForm: ' + JSON.stringify(data)))
  //    .catch(this.handleError);
  //}
  //private updateExecutiveForm(executive: IExecutiveForm, options: RequestOptions): Observable<IExecutiveForm> {
  //  const url = `${this.baseUrl}/${executive.id}`;
  //  return this.http.put(url, executive, options)
  //    .map(() => executive)
  //    .do(data => console.log('updateExecutiveForm: ' + JSON.stringify(data)))
  //    .catch(this.handleError);
  //}
  //private extractData(response: Response) {
  //  let body = response.json();
  //  return body.data || {};
  //}
  //private handleError(error: Response): Observable<any> {
  //  // in a real world app, we may send the server to some remote logging infrastructure
  //  // instead of just logging it to the console
  //  console.error(error);
  //  return Observable.throw(error.json().error || 'Server error');
  //}
}
