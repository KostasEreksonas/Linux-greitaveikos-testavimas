import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-bench-info',
    imports: [
        RouterLink,
        RouterOutlet
    ],
  templateUrl: './bench-info.component.html',
  styleUrl: './bench-info.component.css'
})
export class BenchInfoComponent {
  constructor(private dialog:MatDialog){}

  openDialog(){
    this.dialog.open(PopupComponent);
  }
}
