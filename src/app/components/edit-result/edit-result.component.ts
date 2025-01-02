import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BenchResultsService} from '../../services/bench-results.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-edit-result',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-result.component.html',
  styleUrl: './edit-result.component.css'
})
export class EditResultComponent {
  public id:string;
  public bench_name:string|null = "";
  public bench_type:string|null = "";
  public model:string|null = "";
  public frequency:number|null = 0;
  public average:number|null = 0;
  public fastest:number|null = 0;

  constructor(private route:ActivatedRoute, private router:Router, private benchService:BenchResultsService) {
    this.id = this.route.snapshot.params["id"];
    this.benchService.loadResult(this.id).subscribe( (bench)=>{
      this.bench_name = bench.name;
      this.bench_type = bench.type;
      this.model = bench.model;
      this.frequency = bench.frequency;
      this.average = bench.average;
      this.fastest = bench.fastest;
    })
  }

  public updateRecord(){
    if (this.bench_name != null && this.bench_type != null && this.model != null && this.frequency != null && this.average != null && this.fastest != null) {
      this.benchService.updateRecord({
        id:this.id,
        name:this.bench_name,
        type:this.bench_type,
        model:this.model,
        frequency:this.frequency,
        average:this.average,
        fastest:this.fastest
      }).subscribe({
        next:()=>{
          this.router.navigate(["benchmarks/"+this.bench_name]);
        }
      })
    }
  }
}
