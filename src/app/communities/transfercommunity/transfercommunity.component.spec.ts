import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfercommunityComponent } from './transfercommunity.component';

describe('TransfercommunityComponent', () => {
  let component: TransfercommunityComponent;
  let fixture: ComponentFixture<TransfercommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfercommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransfercommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
