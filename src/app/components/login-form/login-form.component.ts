import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormsModule, NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  public email:string|null=null;
  public password:string|null=null;
  public message:string = ""

  public constructor(private auth:AuthService, private router:Router){

  }

  public login(f:NgForm) {
    this.auth.login(f.form.value.email, f.form.value.password).subscribe((data)=>{
      this.router.navigate(['profile']).then(()=>{
        window.location.reload();
      });
    }, (error)=>{
      this.message = error;
    });
  }
}
