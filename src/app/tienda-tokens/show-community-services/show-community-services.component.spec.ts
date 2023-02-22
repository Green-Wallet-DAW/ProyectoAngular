import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCommunityServicesComponent } from './show-community-services.component';

describe('ShowCommunityServicesComponent', () => {
  let component: ShowCommunityServicesComponent;
  let fixture: ComponentFixture<ShowCommunityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCommunityServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCommunityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
