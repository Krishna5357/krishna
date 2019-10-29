import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesAdminComponent } from './peoples-admin.component';

describe('PeoplesAdminComponent', () => {
  let component: PeoplesAdminComponent;
  let fixture: ComponentFixture<PeoplesAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
