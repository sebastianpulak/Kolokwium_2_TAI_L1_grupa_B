import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemSPComponent } from './orders-item-sp.component';

describe('OrdersItemSPComponent', () => {
  let component: OrdersItemSPComponent;
  let fixture: ComponentFixture<OrdersItemSPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemSPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemSPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
