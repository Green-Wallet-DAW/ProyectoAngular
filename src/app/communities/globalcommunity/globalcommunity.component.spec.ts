import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalcommunityComponent } from './globalcommunity.component';

describe('GlobalcommunityComponent', () => {
  let component: GlobalcommunityComponent;
  let fixture: ComponentFixture<GlobalcommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalcommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalcommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
