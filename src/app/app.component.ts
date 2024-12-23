import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {BenchInfoComponent} from './components/bench-info/bench-info.component';
import {NavigationComponent} from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, BenchInfoComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Linux-greitaveikos-testavimas';
}
