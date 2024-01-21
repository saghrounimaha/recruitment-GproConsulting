import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemandeformationComponent } from './listdemandeformation.component';

describe('ListdemandeformationComponent', () => {
  let component: ListdemandeformationComponent;
  let fixture: ComponentFixture<ListdemandeformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdemandeformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemandeformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
