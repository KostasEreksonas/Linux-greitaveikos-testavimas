import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-registration-form',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  public email:string | null = null;
  public password:string | null = null;
  public message:string = ""

  public constructor(private auth:AuthService, private router:Router) {
  }

  public register() {
    if (this.email != null && this.password != null) {
      this.auth.register(this.email, this.password).subscribe((data)=>{
        this.router.navigate(['login']);
      },(error) => {
        this.message = error;
      });
    }
  }
}
