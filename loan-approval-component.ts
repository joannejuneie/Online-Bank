import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from '../admin-login.service';

@Component({
  selector: 'app-loan-approval',
  templateUrl: './loan-approval.component.html',
  styleUrls: ['./loan-approval.component.css']
})
export class ApprovedLoansComponent implements OnInit {
  approvedLoans: any[] = [];
  sanctionAmount: {[key:number]:number}={};
  status: {[key:number]:string}={};

  constructor(private AdminLoginService: AdminLoginService) { }

  ngOnInit(): void {
    this.loadApprovedLoans();
  }

  loadApprovedLoans(): void {
    this.AdminLoginService.getApprovedLoans().subscribe(
      (data: any) => {
        console.log(this.approvedLoans=data);
       // this.approvedLoans = data;
      },
      (error: any) => {
        console.error('Error fetching approved loans:', error);
      }
    );
  }

  updateLoanStatus(loanId: number): void {
    
    this.AdminLoginService.updateLoanStatus(loanId, this.sanctionAmount[loanId], this.status[loanId]).subscribe(
      (data: any) => {
        console.log(this.sanctionAmount[loanId])
        console.log(this.approvedLoans=data);
        console.log('Loan status updated successfully');
        this.loadApprovedLoans(); // Refresh the list after update
      },
      (error: any) => {
        console.error('Error updating loan status:', error);
      }
    );
  }
}
