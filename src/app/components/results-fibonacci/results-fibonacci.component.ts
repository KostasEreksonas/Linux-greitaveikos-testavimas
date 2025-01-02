import { Component } from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {Bench} from '../../models/bench';
import {BenchResultsService} from '../../services/bench-results.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-results-fibonacci',
    imports: [
      CommonModule,
      RouterLink
    ],
  templateUrl: './results-fibonacci.component.html',
  styleUrl: './results-fibonacci.component.css'
})
export class ResultsFibonacciComponent {
  public title="FIBONACCI";

  public benches:Bench[] = [];

  private loadData(){
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "fibonacci");
      }
    })
  }

  public constructor(private benchService:BenchResultsService) {
    this.loadData();
  }

  public deleteResult(id:string|null){
    if (id != null) {
      this.benchService.deleteResult(id).subscribe( ()=>{
        this.loadData();
      });
    }
  }
}
