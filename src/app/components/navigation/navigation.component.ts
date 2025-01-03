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
  public token:string = "";

  constructor(private auth:AuthService, private router:Router) {
    this.auth.getToken().subscribe((data)=>{
      this.token = data;
    });
  }

  public deleteToken(){
    this.auth.deleteToken();
    this.router.navigate(['about']).then(()=>{
      window.location.reload();
    })
  }
}
