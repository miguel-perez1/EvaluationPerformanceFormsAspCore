// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ExecutiveFormDetailsComponent } from './executive-form-details.component';

let component: ExecutiveFormDetailsComponent;
let fixture: ComponentFixture<ExecutiveFormDetailsComponent>;

describe('executive-form-details component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExecutiveFormDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ExecutiveFormDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
