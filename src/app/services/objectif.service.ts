import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObjectifService {

  private _objectif: string = 'creer des observables';

  obsObjectif = new Subject<string>();

  constructor() { }

  public getObjectif(){
    // alert('récupération de l\'objectif');
    return this._objectif;
  }

  public setObjectif(obj: string){
    // alert('modification de l\'objectif');
    this._objectif = obj;
    this.obsObjectif.next(obj);
  }

}
