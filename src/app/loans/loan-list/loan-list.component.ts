import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

  loans: Loan[] = [];
  loading = true;

  constructor(
    private loanService: LoanService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadLoans();
  }

  loadLoans() {
    this.loanService.getAll().subscribe({
      next: (data) => {
        this.loans = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar empréstimos', err);
        this.loading = false;
      }
    });
  }

goToEdit(id?: number) {
  if (!id) return;
  this.router.navigate(['/loans/edit', id]);
}

goToDetails(id?: number) {
  if (!id) return;
  this.router.navigate(['/loans/details', id]);
}


  deleteLoan(id?: number) {
  if (!id) return; // Se o id não existir, não faz nada

  if (confirm('Deseja realmente excluir este empréstimo?')) {
    this.loanService.delete(id).subscribe(() => {
      this.loadLoans();
    });
  }
}
markAsPaid(id?: number) {
  if (!id) return;

  this.loanService.markAsPaid(id).subscribe({
    next: (updatedLoan) => {
      // Atualiza localmente a lista para refletir mudança
      const loanIndex = this.loans.findIndex(l => l.id === id);
      if (loanIndex !== -1) {
        this.loans[loanIndex].paid = true;
      }
    },
    error: (err) => console.error('Erro ao marcar como pago', err)
  });
}


}
