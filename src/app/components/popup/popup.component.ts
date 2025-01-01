import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-popup',
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  public c1 = "wget https://raw.githubusercontent.com/KostasEreksonas/benchmarking-linux/refs/heads/main/benchmarks/benchmark-ffmpeg";
  public c2 = "chmod +x benchmark-ffmpeg";
  public c3 = "./benchmark-ffmpeg";
  constructor (private clipboard:Clipboard){}

  copyToClipboard(x:string){
    this.clipboard.copy(x);
  }
}
