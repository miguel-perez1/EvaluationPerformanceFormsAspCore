import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExecutiveForm } from '../interfaces/executive-form';

@Component({
    selector: 'app-form-list',
    templateUrl: './form-list.component.html',
    styleUrls: ['./form-list.component.scss']
})
/** form-list component*/
export class FormListComponent implements OnInit{
    pageTitle = 'Form List';
    public execFormList: IExecutiveForm;
    /** form-list ctor */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IExecutiveForm>(baseUrl + 'api/ExecutiveForm/GetAllExecutiveForms').subscribe(result => {
      this.execFormList = result;
    }, error => console.error(error));
  }

    ngOnInit(): void{

    }
}
