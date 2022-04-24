import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralEnquiryComponent } from './general-enquiry/general-enquiry.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: GeneralEnquiryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
