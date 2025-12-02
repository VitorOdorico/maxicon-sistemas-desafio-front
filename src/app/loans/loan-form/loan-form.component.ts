import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoanService } from '../loan.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Loan } from '../loan.model'; // ajuste o caminho se necessário

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.scss'],
})
export class LoanFormComponent implements OnInit {
  form: FormGroup;
  isEdit = false;
  loanId?: number;
  customerId?: number; // ID do cliente opcional
  currencies: string[] = ['BRL', 'USD', 'EUR', 'GBP', 'JPY'];
  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  this.form = this.fb.group({
  customerId: [null, Validators.required],
  loanDate: [new Date().toISOString().substring(0,10), Validators.required],
  dueDate: [new Date().toISOString().substring(0,10), Validators.required],
  currency: ['', Validators.required],
  amount: [null, Validators.required],
  paid: [false]
});



  }

  ngOnInit(): void {
    // Verifica parâmetros da rota
    this.route.params.subscribe((params) => {
      // Se estiver criando um empréstimo a partir de um cliente
      if (params['customerId']) {
        this.customerId = +params['customerId'];
        this.form.patchValue({ customerId: this.customerId });
      }

      // Se estiver editando um empréstimo existente
      if (params['id']) {
        this.isEdit = true;
        this.loanId = +params['id'];
        this.loadLoan(this.loanId);
      }
    });
  }

  loadLoan(id: number) {
    this.loanService.getById(id).subscribe({
      next: (data) => this.form.patchValue(data),
      error: (err) => console.error('Erro ao carregar loan', err),
    });
  }
save() {
  if (this.form.invalid) return;

 const loan: Loan = {
  customerId: this.form.value.customerId,
  loanDate: this.form.value.loanDate,
  dueDate: this.form.value.dueDate,
  currency: this.form.value.currency,
  amount: this.form.value.amount,
  paid: this.form.value.paid || false
};


  if (this.isEdit && this.loanId) {
    loan.id = this.loanId; // opcional, se você usa o id no update
    this.loanService.update(this.loanId, loan).subscribe(() => this.router.navigate(['/loans']));
  } else {
    this.loanService.create(loan).subscribe(() => this.router.navigate(['/loans']));
  }
}



  goBack() {
    this.router.navigate(['/loans']);
  }
}
