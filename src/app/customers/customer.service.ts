import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:8080/maxicon/api/v1/customers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/list`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
  getById(id: number): Observable<Customer> {
  return this.http.get<Customer>(`${this.apiUrl}/search/${id}`);}

  create(customer: Customer): Observable<Customer> {
  return this.http.post<Customer>(`${this.apiUrl}/create`, customer);
  }

  update(id: number, customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/edit/${id}`, customer);
  }
}







