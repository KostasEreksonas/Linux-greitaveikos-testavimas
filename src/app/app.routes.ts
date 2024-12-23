import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {BenchInfoComponent} from './components/bench-info/bench-info.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {BenchResultsComponent} from './components/bench-results/bench-results.component';

export const routes: Routes = [
  {path:"", component:AboutComponent},
  {path:"about", component:AboutComponent},
  {path:"benchmarks", component:BenchInfoComponent},
  {path:"results", component:BenchResultsComponent},
  {path:"login", component:LoginFormComponent}
];
