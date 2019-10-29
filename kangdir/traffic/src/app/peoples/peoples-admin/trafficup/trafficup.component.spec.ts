import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficupComponent } from './trafficup.component';

describe('TrafficupComponent', () => {
  let component: TrafficupComponent;
  let fixture: ComponentFixture<TrafficupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrafficupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
