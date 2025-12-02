import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersModule } from './customers/customers.module';
import { LoansModule } from './loans/loans.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CustomersModule,
    LoansModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
