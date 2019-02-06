/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { FormListComponent } from './form-list.component';

let component: FormListComponent;
let fixture: ComponentFixture<FormListComponent>;

describe('form-list component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ FormListComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(FormListComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});