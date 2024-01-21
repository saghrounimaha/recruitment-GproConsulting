import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstageComponent } from './editstage.component';

describe('EditstageComponent', () => {
  let component: EditstageComponent;
  let fixture: ComponentFixture<EditstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
