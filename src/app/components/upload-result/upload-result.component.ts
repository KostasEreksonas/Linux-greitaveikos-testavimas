import { Component } from '@angular/core';
import {BenchResultsService} from '../../services/bench-results.service';
import {Bench} from '../../models/bench';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-result',
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-result.component.html',
  styleUrl: './upload-result.component.css'
})
export class UploadResultComponent {

  public bench_name:string|null = "";
  public bench_type:string|null = "";
  public model:string|null = "";
  public frequency:number|null = null;
  public average:number|null = null;
  public fastest:number|null = null;

  constructor(private benchService:BenchResultsService, private router:Router) {

  }

  public addNewResult(f:NgForm){
    console.log(f.form.value);
    const tmp:Bench={
      name:f.form.value.bench_name,
      type:f.form.value.bench_type,
      model:f.form.value.model,
      frequency:f.form.value.frequency,
      average:f.form.value.average,
      fastest:f.form.value.fastest,
      id:null
    };

    this.benchService.addResult(tmp).subscribe({
      next:()=>{
        this.router.navigate(["benchmarks/"+this.bench_name]);
      }
    });
  }
}
