import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IExecutiveForm } from '../interfaces/executive-form';
import { ExecutiveFormService } from '../services/executive-form.service';

@Component({
  selector: 'app-executive-form',
  templateUrl: './executive-form.component.html',
  styleUrls: ['./executive-form.component.scss']
})
/** executive-form component*/
export class ExecutiveFormComponent {
  /** executive-form ctor */
  constructor() {

  }

  errorMessage: string;
  user: IExecutiveForm;
  userForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    sap: new FormControl(''),
    department: new FormControl(''),
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }
  //onSubmit(): void {
    //if (this.userForm.dirty && this.userForm.valid) {
    //  // Copy the form values over the basic object values
    //  let p = Object.assign({}, this.user, this.userForm.value);

    //  this.ExecutiveFormService.saveExecutiveForm(p)
    //    .subscribe(
    //      () => this.onSaveComplete(),
    //      (error: any) => this.errorMessage = <any>error
    //    );
    //} else if (!this.userForm.dirty) {
    //  this.onSaveComplete();
    //}
  //}

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.userForm.reset();
  }
}
