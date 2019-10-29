import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensenumberComponent } from './licensenumber.component';

describe('LicensenumberComponent', () => {
  let component: LicensenumberComponent;
  let fixture: ComponentFixture<LicensenumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LicensenumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensenumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
