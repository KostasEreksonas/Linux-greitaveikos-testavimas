import { Component } from '@angular/core';
import {BenchResultsService} from '../../services/bench-results.service';
import {Bench} from '../../models/bench';
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-results-ffmpeg',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './results-ffmpeg.component.html',
  styleUrl: './results-ffmpeg.component.css'
})
export class ResultsFfmpegComponent {
  public title="FFMPEG";

  public benches:Bench[] = [];

  private loadData(){
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.name === "ffmpeg");
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
