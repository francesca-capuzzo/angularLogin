import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.warn(this.user.value);
  }

  submit(){
    this.http.get("https://624803b44bd12c92f4065ec2.mockapi.io/users?username=" + this.user.value.username).subscribe(error => 'username already exist')
    
    this.http.post('https://624803b44bd12c92f4065ec2.mockapi.io/users', this.user.value).subscribe({
      next:res=>{
        alert('REGISTRATION SUCCESFUL');
        this.user.reset()
        this.route.navigate(["login"])
    },
      error: err=>{
        alert("Something went wrong")
      }
  });
}

  logIn(){
    const controls = this.user.controls;
    // console.log('Username: ' + controls['username'].value);
    // console.log('Email: ' + controls['email'].value);
    // console.log('Password: ' + controls['password'].value);
    // console.log('DOB: ' + controls['dob'].value);
    console.log('values: ' + this.user.value);
    
  }
}
