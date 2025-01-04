import { Component } from '@angular/core';
import {BenchResultsService} from '../../services/bench-results.service';
import {Bench} from '../../models/bench';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';
import {LoadingComponent} from '../loading/loading.component';

@Component({
  selector: 'app-results-ffmpeg',
  imports: [
    CommonModule,
    RouterLink,
    LoadingComponent
  ],
  templateUrl: './results-ffmpeg.component.html',
  styleUrl: './results-ffmpeg.component.css'
})
export class ResultsFfmpegComponent {
  public title="FFMPEG";

  public benches:Bench[] = [];
  public isLoading = false;
  public isError = false;
  public status = '';
  public message = '';

  private loadData(){
    this.isLoading = true;
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "ffmpeg").sort((a, b) => a.fastest - b.fastest);
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
