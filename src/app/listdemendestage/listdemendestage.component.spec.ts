import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdemendestageComponent } from './listdemendestage.component';

describe('ListdemendestageComponent', () => {
  let component: ListdemendestageComponent;
  let fixture: ComponentFixture<ListdemendestageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdemendestageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdemendestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
