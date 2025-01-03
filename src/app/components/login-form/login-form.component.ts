import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
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

  public constructor(private auth:AuthService, private router:Router){

  }

  public login() {
    if (this.email != null && this.password != null) {
      this.auth.login(this.email, this.password).subscribe((data)=>{
        this.router.navigate(['benchmarks']).then(()=>{
          window.location.reload();
        });
      });
    }
  }
}
