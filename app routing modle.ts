import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanListComponent } from './components/loan-list/loan-list.component';
import { LoanApplicationComponent } from './components/loan-application/loan-application.component';
import { LoanApprovalComponent } from './components/loan-approval/loan-approval.component';
import { LoanPaymentComponent } from './components/loan-payment/loan-payment.component';

const routes: Routes = [
  { path: 'loan-list', component: LoanListComponent },
  { path: 'loan-application', component: LoanApplicationComponent },
  { path: 'loan-approval', component: LoanApprovalComponent },
  { path: 'loan-payment', component: LoanPaymentComponent },
  { path: '', redirectTo: '/loan-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
