import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesociteeComponent } from './profilesocitee.component';

describe('ProfilesociteeComponent', () => {
  let component: ProfilesociteeComponent;
  let fixture: ComponentFixture<ProfilesociteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesociteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesociteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
