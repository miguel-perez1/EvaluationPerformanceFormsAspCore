import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  public user: User;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<User>(baseUrl + 'api/SampleData/GetUsers').subscribe(result => {
      this.user = result;
    }, error => console.error(error));
  }
}

interface User {
  name: string;
  title: string;
  sap: number;
  division: string;
}
