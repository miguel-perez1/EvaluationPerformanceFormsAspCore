import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component';
import { ExecutiveFormComponent } from './executive-form/executive-form.component';
import { ExecutiveFormDetailsComponent } from './executive-form-details/executive-form-details.component';
import { MaterialsModule } from './materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ExecutiveFormService } from './services/executive-form.service';
import { ProfileService } from './services/profile.service';
import { StepPayPlanService } from './services/step-pay-plan-form.service';
import { StepPayPlanFormComponent } from './step-pay-plan-form/step-pay-plan-form.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { FormListComponent } from './form-list/form-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    FormListComponent,
    ExecutiveFormComponent,
    StepPayPlanFormComponent,
    ProfileComponent,
    ExecutiveFormDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MaterialsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'form-list', component: FormListComponent },
      { path: 'executive-details/:id', component: ExecutiveFormDetailsComponent },
      { path: 'executive-view/:id/edit', component: ExecutiveFormComponent },
      { path: 'step-view', component: StepPayPlanFormComponent },
    ])
  ],
  providers: [ExecutiveFormService, ProfileService, StepPayPlanService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
