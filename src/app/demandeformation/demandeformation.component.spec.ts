import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeformationComponent } from './demandeformation.component';

describe('DemandeformationComponent', () => {
  let component: DemandeformationComponent;
  let fixture: ComponentFixture<DemandeformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
