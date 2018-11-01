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
import { MaterialsModule } from './materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ExecutiveFormService } from './services/executive-form.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpService } from './services/sign-up.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    UserListComponent,
    ExecutiveFormComponent,
    SignUpComponent
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
      { path: 'signup', component: SignUpComponent },
      { path: 'user-list', component: UserListComponent },
      { path: 'executive-view', component: ExecutiveFormComponent },
    ])
  ],
  providers: [ExecutiveFormService, SignUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
