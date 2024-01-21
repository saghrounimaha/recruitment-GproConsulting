import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandestageComponent } from './demandestage.component';

describe('DemandestageComponent', () => {
  let component: DemandestageComponent;
  let fixture: ComponentFixture<DemandestageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandestageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
