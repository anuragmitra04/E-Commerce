import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  SignUpForm: FormGroup 
  constructor(private router: Router) { 
    this.SignUpForm = new FormGroup({
      register_name: new FormControl('', [Validators.required]),
      register_number: new FormControl('', [Validators.required]),
      register_email: new FormControl('', [Validators.required]),
      register_password: new FormControl('', [Validators.required]),
      register_confirm_password: new FormControl('', [Validators.required]),



    });
    
  }

  ngOnInit(): void {
  }

  onSubmitSignUp(){
    if (this.SignUpForm.valid) {
      alert('Sign up successfull!')
      
    } else {
      alert('not successfyll!')
      
    }
  }
  signUp(){
    this.router.navigate(['login'])
  }
  forgotPassword(){
    this.router.navigate(['forgot_password'])
  }
  }


