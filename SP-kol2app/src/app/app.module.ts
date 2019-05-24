import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersSPComponent } from './orders-sp/orders-sp.component';
import { OrdersItemSPComponent } from './orders-item-sp/orders-item-sp.component';
import { OrdersDetailsSPComponent } from './orders-details-sp/orders-details-sp.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdersSPComponent,
    OrdersItemSPComponent,
    OrdersDetailsSPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
