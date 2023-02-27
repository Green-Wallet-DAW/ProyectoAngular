import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralviewChartComponent } from './generalview-chart.component';

describe('GeneralviewChartComponent', () => {
  let component: GeneralviewChartComponent;
  let fixture: ComponentFixture<GeneralviewChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralviewChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralviewChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
