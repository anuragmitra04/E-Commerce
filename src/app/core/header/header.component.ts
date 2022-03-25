import { Component, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router";//redirect page

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  // onNotifyClicked(userData: any):void{
  //   console.log(userData)
  // }

  ngOnInit(): void {

  }

  login(){
    this.router.navigate(['signUp']);
    }
    cart(){
      alert('ABC')
    }
    

}
