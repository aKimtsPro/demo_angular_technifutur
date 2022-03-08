import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private _isConnected = false;

  constructor() { }

  public get isConnected(){
    return this._isConnected;
  }

  public connect(credentials: User): boolean{
    if(credentials.username === 'user' && credentials.password === 'pass'){
      this._isConnected = true;
      return true;
    }
    return false;
  }

  public disconnect(): boolean{
    if(this.isConnected){
      this._isConnected = false;
      return true;
    }
    return false;
  }
}
