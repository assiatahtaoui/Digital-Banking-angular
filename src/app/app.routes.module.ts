import {Routes, RouterModule, RouterOutlet} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';

import {NgModule} from '@angular/core';
import {AccountsComponent} from './accounts/accounts.component';
import {NewCustomerComponent} from './new-customer/new-customer.component';
import {LoginComponent} from './login/login.component';



// @ts-ignore
export const routes: Routes = [
  {path :"customers", component : CustomersComponent},
  {path: "accounts", component : AccountsComponent},
  {path: "new-customer", component :NewCustomerComponent},
  {path: "login", component: LoginComponent},
  {path: "",redirectTo:"/login", pathMatch:"full"}

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutesModule{

}
