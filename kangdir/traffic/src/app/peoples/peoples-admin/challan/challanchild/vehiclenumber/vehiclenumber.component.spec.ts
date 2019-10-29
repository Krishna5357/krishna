import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclenumberComponent } from './vehiclenumber.component';

describe('VehiclenumberComponent', () => {
  let component: VehiclenumberComponent;
  let fixture: ComponentFixture<VehiclenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
