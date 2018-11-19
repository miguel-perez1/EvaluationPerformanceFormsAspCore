import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IExecutiveForm } from '../interfaces/executive-form';
import { SignUpService } from '../services/sign-up.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { IUser } from '../interfaces/user';
@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
/** sign-up component*/
export class SignUpComponent {
    /** sign-up ctor */
  constructor(private SignUpService: SignUpService) {

  }
  errorMessage: string;
  user: IUser;
  userForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    sap: new FormControl(''),
    division: new FormControl(''),
  });
  onSubmit() {
    // Copy the form values over the basic object values
    let p = Object.assign({}, this.user, this.userForm.value);

    this.SignUpService.signUpUser(p).subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
    );
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.userForm.reset();
  }
}
