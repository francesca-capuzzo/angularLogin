import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


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

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    // console.warn(this.user.value);
  }

  // private validateUsername(): ValidatorFn {
  //   return (control: AbstractControl): {[key: string]: any} => {
  //     this.http.get(this.user.value.username)
  //       .subscribe(
  //         ({data}) => {
  //           let res: string = data;
  //           if (res === control.value) {
  //             return {'alreadyExist': true};
  //           } else {
  //             return null
  //           }
  //         },
  //         (error) => {
  //           console.log(error);
  //         }
  //       )
  //   }}

  logIn(){
    // const controls = this.user.controls;
    // console.log('Username: ' + controls['username'].value);
    // console.log('Password: ' + controls['password'].value);
    this.http.get<any>("https://624803b44bd12c92f4065ec2.mockapi.io/users?username=" + this.user.value.username)
    .subscribe({
      next: res=>{
      const user = res.find((a:any)=>{
        return a.username === this.user.value.username && a.password === this.user.value.password 
      });
      if(user){
        alert('Login Succesful');
        this.user.reset()
      this.router.navigate(["home"])
      }else{
        alert("user not found")
      }
    },
      error: () =>{
        alert("Something went wrong")

      }
    });
  }
}
