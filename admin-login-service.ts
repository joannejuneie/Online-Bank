
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  private baseUrl: string = 'https://localhost:44346/api/'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  getApprovedLoans(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}`+"Loan/GetLoanApplicationStatus");
  }

  updateLoanStatus(loanId: number, sanctionAmount: number, status: string): Observable<any> {
    console.log(sanctionAmount)
    let params = new HttpParams()
    .append('loanId',loanId)
    .append('sanctionAmount',sanctionAmount)
    .append('status',status)
    const headers = new HttpHeaders()
    .append('Content-Type','application/json');
    return this.http.post<void>(`${this.baseUrl}/Loan/PUT/Loan/ApproveLoanApplication`,undefined,{
      headers:headers,
      params:params
      
    }
  );
 
    
    // const body = { loanId, sanctionAmount, status };
    // return this.http.put<any>(`${this.baseUrl}`+ "Loan/PUT/Loan/ApproveLoanApplication",body);
  }
}



 
 

   


