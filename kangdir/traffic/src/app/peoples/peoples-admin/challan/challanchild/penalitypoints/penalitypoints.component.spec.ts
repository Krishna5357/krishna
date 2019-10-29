import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenalitypointsComponent } from './penalitypoints.component';

describe('PenalitypointsComponent', () => {
  let component: PenalitypointsComponent;
  let fixture: ComponentFixture<PenalitypointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenalitypointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenalitypointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
