import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorSwapService {

  swapObs = new Subject<string | undefined>();

  constructor() { }

  swap(){
    this.swapObs.next(undefined);
  }

  swapWithColor(color: string){
    this.swapObs.next(color);
  }
}
