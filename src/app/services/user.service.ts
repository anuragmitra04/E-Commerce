import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable } from "rxjs";
// import { catchError } from "rxjs/operators";
// import { Login } from "../models/login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private apiUrl = "http://localhost:8181"

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private http:HttpClient) { }

  signUpData(data:any):Observable<any>{
    return this.http.post('http://localhost:8181/signup', data);
  }

  loginData(data:any):Observable<any>{
    return this.http.post('http://localhost:8181/login', data);
  }

}
