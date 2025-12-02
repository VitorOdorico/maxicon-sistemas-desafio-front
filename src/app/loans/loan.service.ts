import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan.model';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'http://localhost:8080/maxicon/api/v1/loans';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${this.apiUrl}/list`);
  }

  getById(id: number): Observable<Loan> {
    return this.http.get<Loan>(`${this.apiUrl}/search/${id}`);
  }

  create(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(`${this.apiUrl}/create`, loan);
  }

  update(id: number, loan: Loan): Observable<Loan> {
    return this.http.put<Loan>(`${this.apiUrl}/edit/${id}`, loan);
  }

  markAsPaid(id: number): Observable<Loan> {
    return this.http.put<Loan>(`${this.apiUrl}/payment/${id}`, {});
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
