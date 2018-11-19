import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IStepPayPlanForm } from '../interfaces/step-pay-plan-form';

@Injectable()
export class StepPayPlanService {
  private addNewStepPayPlanFormApi: string = 'http://localhost:53473/api/StepPayPlan/SaveNewStepPayPlanForm';

  constructor(private http: HttpClient) {

  }
  saveStepPayPlanForm(step: IStepPayPlanForm): Observable<IStepPayPlanForm> {
    return this.http.post<IStepPayPlanForm>(this.addNewStepPayPlanFormApi, step);
  }
}
