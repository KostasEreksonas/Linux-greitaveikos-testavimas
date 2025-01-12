import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bench} from '../models/bench';
import {map, tap} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BenchResultsService {

  private benches:Bench[] = [];
  public filtered:Bench[] = [];
  public onResultCountChange = new EventEmitter();
  public idToken:string = "";

  constructor(private http:HttpClient, private auth:AuthService) {
    let tmp = localStorage.getItem('token');
    if (tmp != null) {
      this.idToken = tmp;
    }
  }

  public addResult(item:Bench) {
    return this.http.post("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results.json", item, {
      params:{
        "auth":this.idToken
      }
    })
  }

  public loadResults(){
    return this.http
      .get<{[key:string]:Bench}>("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results.json", {
        params:{
          "auth":this.idToken
        }
      })
      .pipe(
        map((data):Bench[]=>{
          const benches=[];
          for (let k in data){
            data[k].id=k;
            benches.push(data[k]);
          }
          return benches;
        }),
        tap((data)=>{
          this.benches=data;
          this.onResultCountChange.emit();
        })
      )
  }

  public loadResult(id:string){
    return this.http.get<Bench>("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results/"+id+".json", {
      params:{
        "auth":this.idToken
      }
    });
  }
  public updateRecord(item:Bench){
    return this.http.patch("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results/"+item.id+".json", item, {
      params:{
        "auth":this.idToken
      }
    });
  }

  public deleteResult(id:string){
    return this.http.delete("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results/"+id+".json", {
      params:{
        "auth":this.idToken
      }
    });
  }

  public resultsCount(){
    return this.filtered.length;
  }
}
