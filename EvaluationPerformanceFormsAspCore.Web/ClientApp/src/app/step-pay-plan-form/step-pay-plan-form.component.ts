import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { StepPayPlanService } from '../services/step-pay-plan-form.service';
import { IStepPayPlanForm } from '../interfaces/step-pay-plan-form';

@Component({
    selector: 'app-step-pay-plan-form',
    templateUrl: './step-pay-plan-form.component.html',
    styleUrls: ['./step-pay-plan-form.component.scss']
})
/** step-pay-plan-form component*/
export class StepPayPlanFormComponent {
    /** step-pay-plan-form ctor */
  constructor(private StepPayPlanService: StepPayPlanService) {

    }

  errorMessage: string;
  step: IStepPayPlanForm;
  stepPayPlanForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    department: new FormControl(''),
    review: new FormControl(''),
    sap: new FormControl(''),
    period: new FormControl(''),
    division: new FormControl(''),
    testName: new FormControl('')
  });

  //onSubmit() {
  //  // TODO: Use EventEmitter with form value
  //  console.warn(this.userForm.value);
  //}
  onSubmit() {
    // Copy the form values over the basic object values
    let p = Object.assign({}, this.step, this.stepPayPlanForm.value);

    this.StepPayPlanService.saveStepPayPlanForm(p).subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
    );
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.stepPayPlanForm.reset();
  }
}
