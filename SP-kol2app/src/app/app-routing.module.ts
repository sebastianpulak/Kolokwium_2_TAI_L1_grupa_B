import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersSPComponent} from './orders-sp/orders-sp.component'
import { OrdersDetailsSPComponent } from './orders-details-sp/orders-details-sp.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersSPComponent
  },
  {
    path: 'details/:id',
    component: OrdersDetailsSPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
