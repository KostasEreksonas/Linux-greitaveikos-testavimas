import { Routes } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {BenchInfoComponent} from './components/bench-info/bench-info.component';

export const routes: Routes = [
  {path:"about", component:AboutComponent},
  {path:"benchmarks", component:BenchInfoComponent}
];
