import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup


  constructor(private router: Router, private api: UserService) {
    this.loginForm = new FormGroup({
          email: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required]),
        });
   }

  //  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onSubmitLogin(){
    if(this.loginForm.valid){
      const data=this.loginForm
      //console.log(data.value, "REQUEST")
      this.api.loginData(data.value).subscribe(response=>{
       // console.log(response, "RESPOENSE")
      //  this.notify.emit(response)
        alert(response.msg);
        //localStorage.setItem('userData', JSON.stringify(response))
         this.router.navigate(['dashboard'])
      })
      // alert('Sign up successfull!')
      
    } else {
      alert('All fields are required')
      
    }
  }
}

