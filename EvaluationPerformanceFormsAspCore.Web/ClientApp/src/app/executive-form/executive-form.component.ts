import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IExecutiveForm } from '../interfaces/executive-form';
import { ExecutiveFormService } from '../services/executive-form.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-executive-form',
  templateUrl: './executive-form.component.html',
  styleUrls: ['./executive-form.component.scss']
})
/** executive-form component*/
export class ExecutiveFormComponent {
  /** executive-form ctor */
  constructor(private ExecutiveFormService: ExecutiveFormService) {

  }

  errorMessage: string;
  executive: IExecutiveForm;
  executiveForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    department: new FormControl(''),
    reviewType: new FormControl(''),
    sap: new FormControl(''),
    period: new FormControl(''),
    division: new FormControl(''),
    secTwoPercent: new FormControl(''),
    secTwoRating: new FormControl(''),
    secTwoResponsibility: new FormControl(''),
    secTwoSummary: new FormControl(''),
    teamworkRating: new FormControl(''),
    integRating: new FormControl(''),
    innovaRating: new FormControl(''),
    profRating: new FormControl(''),
    ladRating: new FormControl(''),
    stratRating: new FormControl(''),
    excellenceRating: new FormControl(''),
    decisionRating: new FormControl(''),
    pdpRating: new FormControl(''),
    secFiveTime: new FormControl(''),
    secFiveSummary: new FormControl(''),
    secSixSummary: new FormControl(''),
    revComments: new FormControl(''),
    employeeComments: new FormControl(''),
  });

  //onSubmit() {
  //  // TODO: Use EventEmitter with form value
  //  console.warn(this.userForm.value);
  //}
  onSubmit() {
    // Copy the form values over the basic object values
    let p = Object.assign({}, this.executive, this.executiveForm.value);

    this.ExecutiveFormService.saveExecutiveForm(p).subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
    );
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.executiveForm.reset();
  }
}
