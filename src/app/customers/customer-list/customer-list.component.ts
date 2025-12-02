import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  loading = true;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }
  goToCreateLoan(customerId: number) {
  // Redireciona para o formulário de empréstimo, passando o ID do cliente
  this.router.navigate(['/loans/create', customerId]);
}


  loadCustomers() {
    this.customerService.getAll().subscribe({
      next: (data) => {
        this.customers = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar customers', err);
        this.loading = false;
      }
    });
  }

  goToEdit(id: number) {
    this.router.navigate(['/customers/edit', id]);
  }

  goToDetails(id: number) {
    this.router.navigate(['/customers/details', id]);
  }

  deleteCustomer(id: number) {
    if (confirm('Deseja realmente excluir este cliente?')) {
      this.customerService.delete(id).subscribe(() => {
        this.loadCustomers();
      });
    }
  }
}
