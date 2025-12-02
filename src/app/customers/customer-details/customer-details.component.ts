import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private service: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getById(id).subscribe({
      next: (data) => this.customer = data,
      error: () => alert('Erro ao carregar detalhes do cliente')
    });
  }

  goBack() {
    this.router.navigate(['/customers']);
  }

  edit() {
    this.router.navigate(['/customers/edit', this.customer.id]);
  }
}
