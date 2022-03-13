import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";//redirect page

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['login']);
    }
    cart(){
      alert('ABC')
    }

}
