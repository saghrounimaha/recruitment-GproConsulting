import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StagebysocieteComponent } from './stagebysociete.component';

describe('StagebysocieteComponent', () => {
  let component: StagebysocieteComponent;
  let fixture: ComponentFixture<StagebysocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StagebysocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StagebysocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
