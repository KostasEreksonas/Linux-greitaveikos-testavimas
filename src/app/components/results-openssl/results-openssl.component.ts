import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Bench} from '../../models/bench';
import {BenchResultsService} from '../../services/bench-results.service';

@Component({
  selector: 'app-results-openssl',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './results-openssl.component.html',
  styleUrl: './results-openssl.component.css'
})
export class ResultsOpensslComponent {
  public title="OPENSSL";

  public benches:Bench[] = [];

  private loadData(){
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "openssl");
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
