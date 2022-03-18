import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup

  constructor(private router: Router) {
    this.forgotPasswordForm=new FormGroup({
      forgot_passowrd: new FormControl('',[Validators.required]),
      forgot_otp_number: new FormControl('',[Validators.required])
    })
   }

  ngOnInit(): void {
  }

  forgotPasswordButton(){
    if(this.forgotPasswordForm.valid){
      alert('Forgot password works');
      
    }
    else{
      alert('Please fill the require field');
    }
  }

}
