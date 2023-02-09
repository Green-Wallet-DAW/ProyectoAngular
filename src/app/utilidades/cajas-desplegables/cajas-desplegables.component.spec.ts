import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajasDesplegablesComponent } from './cajas-desplegables.component';

describe('CajasDesplegablesComponent', () => {
  let component: CajasDesplegablesComponent;
  let fixture: ComponentFixture<CajasDesplegablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CajasDesplegablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CajasDesplegablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
