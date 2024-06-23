import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoanType, LoanApplication, LoanPayment } from '../models/loan-models';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  private apiUrl = 'https://localhost:5001/api/Loan';

  constructor(private http: HttpClient) { }

  getLoanTypes(): Observable<LoanType[]> {
    return this.http.get<LoanType[]>(this.apiUrl);
  }

  addLoanApplication(loanApplication: LoanApplication): Observable<any> {
    return this.http.post(`${this.apiUrl}/POST/Loan/LoanApplication`, loanApplication);
  }

  approveLoanApplication(loanApplication: LoanApplication): Observable<any> {
    return this.http.put(`${this.apiUrl}/PUT/Loan/ApproveLoanApplication`, loanApplication);
  }

  payLoanEMI(loanPayment: LoanPayment): Observable<any> {
    return this.http.post(`${this.apiUrl}/POST/Loan/LoanPayment`, loanPayment);
  }
}
