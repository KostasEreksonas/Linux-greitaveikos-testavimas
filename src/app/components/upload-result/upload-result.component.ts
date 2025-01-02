import { Component } from '@angular/core';
import {BenchResultsService} from '../../services/bench-results.service';
import {Bench} from '../../models/bench';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
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
  public frequency:number|null = 0;
  public average:number|null = 0;
  public fastest:number|null = 0;

  constructor(private benchService:BenchResultsService, private router:Router) {

  }

  public addNewResult(){
    if (this.bench_name != null && this.bench_type != null && this.model != null && this.frequency != null && this.average != null && this.fastest != null) {
      const tmp:Bench={
        name:this.bench_name,
        type:this.bench_type,
        model:this.model,
        frequency:this.frequency,
        average:this.average,
        fastest:this.fastest,
        id:null
      };

      this.benchService.addResult(tmp).subscribe({
        next:()=>{
          this.router.navigate(["benchmarks/"+this.bench_name]);
        }
      });
    }
  }
}
