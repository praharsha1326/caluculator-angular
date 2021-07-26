import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorcompComponent } from './calculatorcomp.component';

describe('CalculatorcompComponent', () => {
  let component: CalculatorcompComponent;
  let fixture: ComponentFixture<CalculatorcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
