import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSPComponent } from './orders-sp.component';

describe('OrdersSPComponent', () => {
  let component: OrdersSPComponent;
  let fixture: ComponentFixture<OrdersSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
