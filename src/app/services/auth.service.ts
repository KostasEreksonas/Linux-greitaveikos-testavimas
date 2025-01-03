import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponseData} from '../models/authResponseData';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public idToken:string = "";

  constructor(private http:HttpClient) { }

  public register(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwO8IwacXBrhatWMA_CiMEy-c0ZXchKJk', {
      email:email,
      password:password,
      returnSecureToken:true
    });
  }

  public login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwO8IwacXBrhatWMA_CiMEy-c0ZXchKJk', {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(tap((response)=>{
      this.idToken = response.idToken;
    }));
  }
}
