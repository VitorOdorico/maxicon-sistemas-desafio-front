import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {

  form!: FormGroup;
  customerId!: number;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      document: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.customerId = Number(id);
        this.isEdit = true;

        this.customerService.getById(this.customerId).subscribe(data => {
          this.form.patchValue(data);
        });
      }
    });
  }

  save() {
    if (this.form.invalid) return;

    const customer: Customer = this.form.value;

    if (this.isEdit) {
      this.customerService.update(this.customerId, customer).subscribe(() => {
        alert('Cliente atualizado com sucesso!');
        this.goBack();
      });
    } else {
      this.customerService.create(customer).subscribe(() => {
        alert('Cliente criado com sucesso!');
        this.goBack();
      });
    }
  }

  goBack() {
    this.router.navigate(['/customers']);
  }
}
