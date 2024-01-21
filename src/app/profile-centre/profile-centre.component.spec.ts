import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCentreComponent } from './profile-centre.component';

describe('ProfileCentreComponent', () => {
  let component: ProfileCentreComponent;
  let fixture: ComponentFixture<ProfileCentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
