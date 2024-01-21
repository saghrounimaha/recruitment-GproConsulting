import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterstageComponent } from './ajouterstage.component';

describe('AjouterstageComponent', () => {
  let component: AjouterstageComponent;
  let fixture: ComponentFixture<AjouterstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
