import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  
  user = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('', Validators.required),
    dob: new FormControl('',Validators.required),
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
    console.log('Email: ' + controls['email'].value);
    console.log('Password: ' + controls['password'].value);
    console.log('DOB: ' + controls['dob'].value);
  }
}
