import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { LoanListComponent } from './loans/loan-list/loan-list.component';
import { LoanFormComponent } from './loans/loan-form/loan-form.component';
import { LoanDetailsComponent } from './loans/loan-details/loan-details.component';

const routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/create', component: CustomerFormComponent },
  { path: 'customers/edit/:id', component: CustomerFormComponent },
  { path: 'customers/details/:id', component: CustomerDetailsComponent },

  { path: 'loans', component: LoanListComponent },
  { path: 'loans/create/:customerId', component: LoanFormComponent },
  { path: 'loans/edit/:id', component: LoanFormComponent },
  { path: 'loans/details/:id', component: LoanDetailsComponent },
  // redirecionamento padrão
  { path: '', redirectTo: '/customers', pathMatch: 'full' },

  // rota para caso digitem algo errado
  { path: '**', redirectTo: '/customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
