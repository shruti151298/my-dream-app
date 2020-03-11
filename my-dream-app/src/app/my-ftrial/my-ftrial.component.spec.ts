import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFtrialComponent } from './my-ftrial.component';

describe('MyFtrialComponent', () => {
  let component: MyFtrialComponent;
  let fixture: ComponentFixture<MyFtrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFtrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFtrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
