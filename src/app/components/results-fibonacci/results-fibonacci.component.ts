import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Bench} from '../../models/bench';
import {BenchResultsService} from '../../services/bench-results.service';
import {RouterLink} from '@angular/router';
import {LoadingComponent} from "../loading/loading.component";

@Component({
  selector: 'app-results-fibonacci',
    imports: [
        CommonModule,
        RouterLink,
        LoadingComponent
    ],
  templateUrl: './results-fibonacci.component.html',
  styleUrl: './results-fibonacci.component.css'
})
export class ResultsFibonacciComponent {
  public title="FIBONACCI";

  public benches:Bench[] = [];
  public isLoading = false;
  public isError = false;

  private loadData(){
    this.isLoading = true;
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "fibonacci");
        this.isLoading = false;
        this.isError = false;
      },
      error:(data)=>{
        this.isError = true;
        this.isLoading = false;
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
