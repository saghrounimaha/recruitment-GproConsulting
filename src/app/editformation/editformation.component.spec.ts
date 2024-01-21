import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditformationComponent } from './editformation.component';

describe('EditformationComponent', () => {
  let component: EditformationComponent;
  let fixture: ComponentFixture<EditformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
