import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BenchResultsService} from '../../services/bench-results.service';
import {CommonModule} from '@angular/common';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-result',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-result.component.html',
  styleUrl: './edit-result.component.css'
})
export class EditResultComponent {
  public id:string;
  public email:string = "";
  public bench_name:string|null = "";
  public bench_type:string|null = "";
  public model:string|null = "";
  public frequency:number|null = null;
  public average:number|null = null;
  public fastest:number|null = null;

  constructor(private route:ActivatedRoute, private router:Router, private benchService:BenchResultsService) {
    this.id = this.route.snapshot.params["id"];
    this.benchService.loadResult(this.id).subscribe( (bench)=>{
      this.email = bench.email;
      this.bench_name = bench.name;
      this.bench_type = bench.type;
      this.model = bench.model;
      this.frequency = bench.frequency;
      this.average = bench.average;
      this.fastest = bench.fastest;
    })
  }

  public updateRecord(f:NgForm){
    this.benchService.updateRecord({
      id:this.id,
      email:this.email,
      name:f.form.value.bench_name,
      type:f.form.value.bench_type,
      model:f.form.value.model,
      frequency:f.form.value.frequency,
      average:f.form.value.average,
      fastest:f.form.value.fastest,
    }).subscribe({
      next:()=>{
        this.router.navigate(["benchmarks/"+this.bench_name]);
      }
    })
  }
}
