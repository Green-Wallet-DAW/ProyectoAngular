import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavecommunityComponent } from './leavecommunity.component';

describe('LeavecommunityComponent', () => {
  let component: LeavecommunityComponent;
  let fixture: ComponentFixture<LeavecommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavecommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeavecommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
