import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomerService} from '../services/customer.service';
import {Customer} from '../model/customer.model';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-customer',
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {

  newCustomerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder,private customerService:CustomerService, private router:Router) { }
  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name:this.fb.control(null, [Validators.required, Validators.minLength(6)]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
    })
  }

  handleSaveCustomer() {
    let customer: Customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next : date=>{
        alert("Customer saved successfully!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/customers");
      },
      error : error=>{
        console.log(error)
      }
    });
  }
}



