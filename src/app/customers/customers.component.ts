import {Component, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {CustomerService} from '../services/customer.service';
import {catchError, map, Observable, throwError} from 'rxjs';
import {Customer} from '../model/customer.model';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-customers',
  imports: [NgForOf, NgIf, AsyncPipe, ReactiveFormsModule, JsonPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
 customers!: Observable<Array<Customer>>;
 errorMessage!: string ;
 searchFormGroup!: FormGroup;
  constructor(private customerService: CustomerService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchFormGroup = this.formBuilder.group({
      keyword: this.formBuilder.control(""),
    })
    this.customers= this.customerService.getCustomers().pipe(
    catchError(err => {
      this.errorMessage=err.message();
       return throwError(err)
    })
    );

  }

  handleSearchCustomers() {
    let kw=this.searchFormGroup?.value.keyword;
    this.customers=this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
        this.errorMessage=err.message();
        return throwError(err)
      })
    );
  }

  handDeleteCustomer(c: Customer) {

    let con=confirm("Are you sure you want to delete this customer?");
    if(!con) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next: (res)=>{
      this.customers=this.customers.pipe(
        map(data=>{
          let index=data.indexOf(c);
          data.slice(index,1);
          return data;
        })
      )
      },
      error: err => {
        console.log(err);
      }
    })
  }
}


