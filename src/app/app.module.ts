import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TemplateComponent } from './template/template.component';
import { SavedOrderComponent } from './saved-order/saved-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { SummaryComponent } from './summary/summary.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
      ShoppingCartComponent,
      TemplateComponent,
      SavedOrderComponent,
      OrderHistoryComponent,
      SummaryComponent,
      NavigationComponent,
      NotificationsComponent,
      ProductListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
