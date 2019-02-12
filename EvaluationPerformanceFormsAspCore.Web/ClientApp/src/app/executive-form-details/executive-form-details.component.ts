import { Component, OnInit } from '@angular/core';
import { IExecutiveForm } from '../interfaces/executive-form';
import { ActivatedRoute, Router } from '@angular/router';
import { ExecutiveFormService } from '../services/executive-form.service';

@Component({
    selector: 'app-executive-form-details',
    templateUrl: './executive-form-details.component.html',
    styleUrls: ['./executive-form-details.component.scss']
})
/** executive-form-details component*/
export class ExecutiveFormDetailsComponent implements OnInit {
    /** executive-form-details ctor */
  pageTitle = 'Form Details'
  errorMessage = '';
  executive: IExecutiveForm | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private executiveFormService: ExecutiveFormService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getFormById(id);
    }
  }

  getFormById(id: number) {
    this.executiveFormService.getFormById(id).subscribe(
      executive => this.executive = executive);
  }
}
