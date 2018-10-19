import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public user: User;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<User>(baseUrl + 'api/SampleData/FirstUser').subscribe(result => {
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
