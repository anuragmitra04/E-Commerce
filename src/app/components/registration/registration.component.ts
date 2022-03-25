import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  SignUpForm: FormGroup 
  constructor(private router: Router, private api: UserService) { 
    this.SignUpForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      // register_confirm_password: new FormControl('', [Validators.required]),



    });
    
  }

  ngOnInit(): void {
  }

  onSubmitSignUp(){
    if (this.SignUpForm.valid) {
      const data=this.SignUpForm
      // console.log(data.value, "REQUEST")
      this.api.signUpData(data.value).subscribe(response=>{
        // console.log(response, "RESPOENSE")
        alert(response.msg);
        this.router.navigate(['dashboard'])
      })
      // alert('Sign up successfull!')
      
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


