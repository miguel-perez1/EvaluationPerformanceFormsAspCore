import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../services/profile.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { IUser } from '../interfaces/user';
import { AuthService } from '../services/auth.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
/** sign-up component*/
export class ProfileComponent implements OnInit{
    /** sign-up ctor */
  profile: any;

  constructor(private ProfileService: ProfileService, public auth: AuthService) {

  }

  ngOnInit(): void {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  errorMessage: string;
  user: IUser;
  profileForm = new FormGroup({
    level: new FormControl(''),
    name: new FormControl(''),
    title: new FormControl(''),
    sap: new FormControl(''),
    division: new FormControl(''),
    email: new FormControl(''),
  });
  
  onSubmit() {
    // Copy the form values over the basic object values
    let p = Object.assign({}, this.user, this.profileForm.value);

    this.ProfileService.signUpUser(p).subscribe(
      () => this.onSaveComplete(),
      (error: any) => this.errorMessage = <any>error
    );
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.profileForm.reset();
  }
}
