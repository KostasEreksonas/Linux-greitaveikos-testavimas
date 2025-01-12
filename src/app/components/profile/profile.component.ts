import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoadingComponent} from '../loading/loading.component';
import {CommonModule} from '@angular/common';
import {Bench} from '../../models/bench';
import {BenchResultsService} from '../../services/bench-results.service';
import {RouterLink} from '@angular/router';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-profile',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LoadingComponent,
    CommonModule,
    RouterLink,
    FooterComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  public email:string|null = ""
  public benches:Bench[] = [];
  public isLoading = false;
  public isError = false;
  public status = '';
  public message = '';

  private loadData(){
    this.isLoading = true;
    this.benchService.loadResults().subscribe({
      next:(data)=>{
        this.benches=data.filter(x => x.email === this.email).sort((a, b) => a.fastest - b.fastest);
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
    let tmp = localStorage.getItem('email');
    if (tmp != null) {
      this.email = tmp;
    }
    this.loadData()
  }

  public deleteResult(id:string|null){
    if (id != null) {
      this.benchService.deleteResult(id).subscribe( ()=>{
        this.loadData();
      });
    }
  }
}
