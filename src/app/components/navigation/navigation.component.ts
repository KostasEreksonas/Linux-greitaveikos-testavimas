import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-navigation',
  imports: [RouterLink, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  public idToken:string = "";

  constructor(private auth:AuthService, private router:Router) {
    let tmp = localStorage.getItem('token');
    if (tmp != null) {
      this.idToken = tmp;
    }
  }

  public deleteToken(){
    this.auth.deleteToken();
    this.router.navigate(['about']).then(()=>{
      window.location.reload();
    })
  }
}
