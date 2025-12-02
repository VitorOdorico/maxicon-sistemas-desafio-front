import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoansRoutingModule } from './loans-routing.module';

@NgModule({
  declarations: [
    LoanListComponent,
    LoanFormComponent,
    LoanDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // ⚠️ precisa estar aqui
    LoansRoutingModule
  ]
})
export class LoansModule {}
