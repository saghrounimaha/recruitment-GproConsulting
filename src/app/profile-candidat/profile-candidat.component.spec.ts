import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCandidatComponent } from './profile-candidat.component';

describe('ProfileCandidatComponent', () => {
  let component: ProfileCandidatComponent;
  let fixture: ComponentFixture<ProfileCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
