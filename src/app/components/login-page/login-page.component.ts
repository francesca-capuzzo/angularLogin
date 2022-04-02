import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// https://6229de55be12fc4538aa6c8e.mockapi.io/users

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {


  user = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })
  
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.user.value);
  }

  logIn(){
    const controls = this.user.controls;
    console.log('Username: ' + controls['username'].value);
    console.log('Password: ' + controls['password'].value);
  }
}
