import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bench} from '../models/bench';
import {map, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BenchResultsService {

  private benches:Bench[] = [];

  constructor(private http:HttpClient) { }

  public addResult(item:Bench) {
    return this.http.post("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results.json", item)
  }

  public loadResults(){
    return this.http
      .get<{[key:string]:Bench}>("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results.json")
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
        })
      )
  }

  public loadResult(id:string){
    return this.http.get<Bench>("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results/"+id+".json");
  }
  public updateRecord(item:Bench){
    return this.http.patch("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results/"+item.id+".json", item);
  }

  public deleteResult(id:string){
    return this.http.delete("https://linuxbench-c1ed9-default-rtdb.europe-west1.firebasedatabase.app/results/"+id+".json");
  }
}
