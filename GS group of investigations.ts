import { Component, OnInit } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { ApprovedLoan } from '../models/approved-loan.model';

@Component({
  selector: 'app-approved-loans',
  templateUrl: './approved-loans.component.html',
  styleUrls: ['./approved-loans.component.css']
})
export class ApprovedLoansComponent implements OnInit {
  approvedLoans: ApprovedLoan[] = [];

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loadApprovedLoans();
  }

  loadApprovedLoans(): void {
    this.loanService.getApprovedLoans().subscribe(
      (data: ApprovedLoan[]) => {
        this.approvedLoans = data;
      },
      (error: any) => {
        console.error('Error fetching approved loans:', error);
      }
    );
  }

  onSubmit(loanId: number): void {
    const loan = this.approvedLoans.find(l => l.loanApplicationId === loanId);
    if (loan && loan.sanctionAmount !== undefined && loan.loanStatus) {
      this.loanService.updateLoanStatus(loanId, loan.sanctionAmount, loan.loanStatus).subscribe(
        (data: any) => {
          console.log('Loan status updated successfully');
          this.loadApprovedLoans(); // Refresh the list after update
        },
        (error: any) => {
          console.error('Error updating loan status:', error);
        }
      );
    } else {
      console.error('Sanction amount or status is undefined');
    }
  }
}
