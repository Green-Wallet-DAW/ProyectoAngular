import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistservComponent } from './histserv.component';

describe('HistservComponent', () => {
  let component: HistservComponent;
  let fixture: ComponentFixture<HistservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
