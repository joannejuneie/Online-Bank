import { Component, OnInit } from '@angular/core';
import { LoanService } from '../../services/loan.service';
import { LoanType } from '../../models/loan-models';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {
  loanTypes: LoanType[];

  constructor(private loanService: LoanService) { }

  ngOnInit(): void {
    this.loanService.getLoanTypes().subscribe((data: LoanType[]) => {
      this.loanTypes = data;
    });
  }
}
