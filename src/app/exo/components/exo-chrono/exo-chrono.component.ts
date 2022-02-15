import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';
import { Chrono } from 'src/app/models/chrono.model';

@Component({
  selector: 'app-exo-chrono',
  templateUrl: './exo-chrono.component.html',
  styleUrls: ['./exo-chrono.component.css']
})
export class ExoChronoComponent implements OnInit {

  interval?: any;
  chrono: Chrono = {
    minute: 0,
    seconde: 0
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  play(){
    this.interval = setInterval(() => {
      console.log(this.chrono)
      if(this.chrono.seconde === 59){
        this.chrono.seconde = 0;
        this.chrono.minute++;
      }
      else{
        this.chrono.seconde++;
      }
    },1000)
  }

}
