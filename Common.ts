import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';

@Component({
  selector: 'app-approved-loans',
  templateUrl: './approved-loans.component.html',
  styleUrls: ['./approved-loans.component.css']
})
export class ApprovedLoansComponent implements OnInit {
  approvedLoans: any[] = [];
  sanctionAmount: number;
  status: string;

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loadApprovedLoans();
  }

  loadApprovedLoans(): void {
    this.loanService.getApprovedLoans().subscribe(
      (data: any) => {
        this.approvedLoans = data;
      },
      (error: any) => {
        console.error('Error fetching approved loans:', error);
      }
    );
  }

  updateLoanStatus(loanId: number): void {
    this.loanService.updateLoanStatus(loanId, this.sanctionAmount, this.status).subscribe(
      (data: any) => {
        console.log('Loan status updated successfully');
        this.loadApprovedLoans(); // Refresh the list after update
      },
      (error: any) => {
        console.error('Error updating loan status:', error);
      }
    );
  }
}
