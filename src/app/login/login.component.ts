import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username: this.formBuilder.control(""),
      password: this.formBuilder.control(""),
    })
  }

  handleLogin(){
    console.log(this.formLogin.value);
  }

}
