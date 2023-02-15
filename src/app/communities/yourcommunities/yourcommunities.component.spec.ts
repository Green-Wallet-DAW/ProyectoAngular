import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcommunitiesComponent } from './yourcommunities.component';

describe('YourcommunitiesComponent', () => {
  let component: YourcommunitiesComponent;
  let fixture: ComponentFixture<YourcommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourcommunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourcommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
