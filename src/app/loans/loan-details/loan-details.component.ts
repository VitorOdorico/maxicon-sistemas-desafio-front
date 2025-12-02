import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from '../loan.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-loan-details',
  templateUrl: './loan-details.component.html',
  styleUrls: ['./loan-details.component.scss']
})
export class LoanDetailsComponent implements OnInit {

  loan?: Loan;
  loading = true;

  constructor(
    private loanService: LoanService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadLoan(id);
  }

  loadLoan(id: number) {
    this.loanService.getById(id).subscribe({
      next: (data) => {
        this.loan = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar detalhes do empréstimo', err);
        this.loading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/loans']);
  }
}
