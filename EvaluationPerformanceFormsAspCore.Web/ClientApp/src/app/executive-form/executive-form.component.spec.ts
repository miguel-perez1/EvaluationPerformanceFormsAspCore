/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ExecutiveFormComponent } from './executive-form.component';

let component: ExecutiveFormComponent;
let fixture: ComponentFixture<ExecutiveFormComponent>;

describe('executive-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ExecutiveFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ExecutiveFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});