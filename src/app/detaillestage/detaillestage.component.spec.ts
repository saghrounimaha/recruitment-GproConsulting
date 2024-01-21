import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillestageComponent } from './detaillestage.component';

describe('DetaillestageComponent', () => {
  let component: DetaillestageComponent;
  let fixture: ComponentFixture<DetaillestageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaillestageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillestageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
