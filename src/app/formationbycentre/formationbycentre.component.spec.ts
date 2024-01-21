import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationbycentreComponent } from './formationbycentre.component';

describe('FormationbycentreComponent', () => {
  let component: FormationbycentreComponent;
  let fixture: ComponentFixture<FormationbycentreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationbycentreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationbycentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
