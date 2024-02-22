import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './modules/private/Autentication/account/account.component';
import { LoginComponent } from './modules/private/Autentication/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
