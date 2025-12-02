import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerFormComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule {}
