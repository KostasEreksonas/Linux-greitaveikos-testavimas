import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthResponseData} from '../models/authResponseData';
import {catchError, Observable, of, tap, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isError = false;

  constructor(private http:HttpClient) { }

  private errorHandler(error:HttpErrorResponse){
    if (error.status === 0) {
      console.error('An error occurred: ', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error.error.message);
    }

    return throwError(() => new Error(`Klaidos kodas: ${error.status}, pranešimas: ${error.error.error.message}`));
  }

  public register(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCwO8IwacXBrhatWMA_CiMEy-c0ZXchKJk', {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(this.errorHandler));
  }

  public login(email:string, password:string){
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCwO8IwacXBrhatWMA_CiMEy-c0ZXchKJk', {
      email:email,
      password:password,
      returnSecureToken:true
    }).pipe(catchError(this.errorHandler), tap((response)=>{
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
