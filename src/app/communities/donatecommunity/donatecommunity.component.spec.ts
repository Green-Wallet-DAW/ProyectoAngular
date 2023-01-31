import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonatecommunityComponent } from './donatecommunity.component';

describe('DonatecommunityComponent', () => {
  let component: DonatecommunityComponent;
  let fixture: ComponentFixture<DonatecommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonatecommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonatecommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
