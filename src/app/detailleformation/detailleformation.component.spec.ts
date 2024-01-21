import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleformationComponent } from './detailleformation.component';

describe('DetailleformationComponent', () => {
  let component: DetailleformationComponent;
  let fixture: ComponentFixture<DetailleformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
