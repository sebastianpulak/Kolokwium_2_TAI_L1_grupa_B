import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsSPComponent } from './orders-details-sp.component';

describe('OrdersDetailsSPComponent', () => {
  let component: OrdersDetailsSPComponent;
  let fixture: ComponentFixture<OrdersDetailsSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
