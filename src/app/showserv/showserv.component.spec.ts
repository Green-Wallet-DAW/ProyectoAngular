import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowservComponent } from './showserv.component';

describe('ShowservComponent', () => {
  let component: ShowservComponent;
  let fixture: ComponentFixture<ShowservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
