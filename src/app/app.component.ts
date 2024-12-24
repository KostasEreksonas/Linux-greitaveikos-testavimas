import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {BenchInfoComponent} from './components/bench-info/bench-info.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {ResultsFfmpegComponent} from './components/results-ffmpeg/results-ffmpeg.component';
import {ResultsFibonacciComponent} from './components/results-fibonacci/results-fibonacci.component';
import {ResultsPiComponent} from './components/results-pi/results-pi.component';
import {ResultsPowerComponent} from './components/results-power/results-power.component';
import {ResultsMlpComponent} from './components/results-mlp/results-mlp.component';
import {ResultsOpensslComponent} from './components/results-openssl/results-openssl.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutComponent, BenchInfoComponent, NavigationComponent, LoginFormComponent, RegistrationFormComponent, ResultsFfmpegComponent, ResultsFibonacciComponent, ResultsPiComponent, ResultsPowerComponent, ResultsMlpComponent, ResultsOpensslComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Linux-greitaveikos-testavimas';
}
