import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Bench} from '../../models/bench';
import {BenchResultsService} from '../../services/bench-results.service';

@Component({
  selector: 'app-results-power',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './results-power.component.html',
  styleUrl: './results-power.component.css'
})
export class ResultsPowerComponent {
  public title="POWER";

  public benches:Bench[] = [];

  private loadData(){
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "power");
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
