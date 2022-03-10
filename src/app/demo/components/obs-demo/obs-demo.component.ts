import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {

  toNext: number = 0;

  $hot_obs : Subject<number> = new BehaviorSubject<number>(this.toNext); 
  
  $cold_obs : Observable<number> = new Observable(obs => {
    obs.next(1);
    obs.next(2);
    obs.next(3);
    obs.next(4);
    obs.next(5);
    obs.complete();
  })

  constructor() { }

  ngOnInit(): void {
  }

  subToColdObs(){
    this.$cold_obs.subscribe(console.log)
  }

  subToHotObs(){
    this.$hot_obs.subscribe(console.log)
  }

  nextNumber(){
    this.$hot_obs.next( this.toNext );
  }

}
