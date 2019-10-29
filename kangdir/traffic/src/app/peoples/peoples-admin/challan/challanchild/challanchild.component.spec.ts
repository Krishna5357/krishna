import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanchildComponent } from './challanchild.component';

describe('ChallanchildComponent', () => {
  let component: ChallanchildComponent;
  let fixture: ComponentFixture<ChallanchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
