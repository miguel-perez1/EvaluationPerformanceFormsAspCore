import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { StepPayPlanFormComponent } from './step-pay-plan-form.component';

let component: StepPayPlanFormComponent;
let fixture: ComponentFixture<StepPayPlanFormComponent>;

describe('step-pay-plan-form component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ StepPayPlanFormComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(StepPayPlanFormComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
