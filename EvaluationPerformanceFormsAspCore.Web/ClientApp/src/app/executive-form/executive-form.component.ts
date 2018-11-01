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
  constructor(
    private ExecutiveFormService: ExecutiveFormService) {

  }

  errorMessage: string;
  user: IExecutiveForm;
  userForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    sap: new FormControl(''),
    division: new FormControl(''),
  });

  //onSubmit() {
  //  // TODO: Use EventEmitter with form value
  //  console.warn(this.userForm.value);
  //}
  onSubmit() {
    // Copy the form values over the basic object values
    let p = Object.assign({}, this.user, this.userForm.value);

    this.ExecutiveFormService.saveExecutiveForm(p).subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
    );
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.userForm.reset();
  }
}
