import { NgModule } from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CustomersComponent} from './customers/customers.component';
import {AccountsComponent} from './accounts/accounts.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NewCustomerComponent} from './new-customer/new-customer.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    NavbarComponent,
    AccountsComponent,
    CustomersComponent,
    AppComponent,
    HttpClientModule,
    ReactiveFormsModule,
    NewCustomerComponent
  ],

  providers: [],
  bootstrap: []
})
export class AppModule { }
