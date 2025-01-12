import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Bench} from '../../models/bench';
import {BenchResultsService} from '../../services/bench-results.service';
import {LoadingComponent} from '../loading/loading.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-results-power',
  imports: [
    CommonModule,
    RouterLink,
    LoadingComponent,
    FooterComponent
  ],
  templateUrl: './results-power.component.html',
  styleUrl: './results-power.component.css'
})
export class ResultsPowerComponent {
  public title="POWER";

  public benches:Bench[] = [];
  public isLoading = false;
  public isError = false;
  public status = '';
  public message = '';

  private loadData(){
    this.isLoading = true;
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "power").sort((a, b) => a.fastest - b.fastest);
        this.benchService.filtered = this.benches;
        this.benchService.onResultCountChange.emit();
        this.isLoading = false;
        this.isError = false;
      },
      error:(data)=>{
        this.isError = true;
        this.isLoading = false;
        this.status = data.status;
        this.message = data.error.error;
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
