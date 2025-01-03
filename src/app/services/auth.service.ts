import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponseData} from '../models/authResponseData';
import {Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
      localStorage.setItem('token', response.idToken);
    }));
  }

  public getToken():Observable<string>{
    return of(localStorage.getItem('token')!);
  }

  public deleteToken():Observable<void>{
    localStorage.removeItem('token');
    return of();
  }
}
