import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

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

}
