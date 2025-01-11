import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {BenchInfoComponent} from './components/bench-info/bench-info.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {UploadResultComponent} from './components/upload-result/upload-result.component';
import {ResultsFfmpegComponent} from './components/results-ffmpeg/results-ffmpeg.component';
import {ResultsFibonacciComponent} from './components/results-fibonacci/results-fibonacci.component';
import {ResultsPiComponent} from './components/results-pi/results-pi.component';
import {ResultsOpensslComponent} from './components/results-openssl/results-openssl.component';
import {ResultsMlpComponent} from './components/results-mlp/results-mlp.component';
import {ResultsPowerComponent} from './components/results-power/results-power.component';
import {EditResultComponent} from './components/edit-result/edit-result.component';
import {ProfileComponent} from './components/profile/profile.component';

export const routes: Routes = [
  {path:"", component:AboutComponent},
  {path:"about", component:AboutComponent},
  {path:"benchmarks", component:BenchInfoComponent},
  {path:"login", component:LoginFormComponent},
  {path:"register", component:RegistrationFormComponent},
  {path:"upload", component:UploadResultComponent},
  {path:"profile", component:ProfileComponent},
  {path:"benchmarks/ffmpeg", component:ResultsFfmpegComponent},
  {path:"benchmarks/fibonacci", component:ResultsFibonacciComponent},
  {path:"benchmarks/pi", component:ResultsPiComponent},
  {path:"benchmarks/openssl", component:ResultsOpensslComponent},
  {path:"benchmarks/power", component:ResultsPowerComponent},
  {path:"benchmarks/mlpnn", component:ResultsMlpComponent},
  {path:"benchmark/:id", component:EditResultComponent}
];
