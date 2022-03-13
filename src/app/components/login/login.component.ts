import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup


  constructor(private router: Router) {
    this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
        });
   }

  ngOnInit(): void {
  }

  onSubmitLogin(){
    if(this.loginForm.valid){
          if(this.loginForm.controls['email'].value == 'admin' && this.loginForm.controls['password'].value == 'admin')
          {
            // sessionStorage.setItem('setToken', '123');
            alert('login Successful');
            // this.router.navigate(['list-user']);
          }else{
            alert('wrong id')
          }
        }else{
          alert('All fields are required')
          // console.log('Form Is Invalid', this.loginForm);
        }
  }
}

