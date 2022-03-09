import { Injectable } from '@angular/core';
import { PanierItem } from '../models/panier-item.model';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private list: PanierItem[] = [];

  constructor() { }

  addToCart(plat: Plat){
    const item = this.list
      .find(value => value.plat.nom == plat.nom);

    if(item)
      item.qtt++
    else
      this.list.push({
        plat: plat,
        qtt: 1
      });
  }

  removeFromCart(plat: Plat, qtt?: number){

    const item = this.list.find(value => value.plat.nom === plat.nom);

    if(item && !qtt){
      const index = this.list.indexOf(item);
      this.list.splice(index,1);
    }
    else if (item && qtt) {
      item.qtt -= qtt;
      if(item.qtt <= 0){
        const index = this.list.indexOf(item);
        this.list.splice(index,1);
      }
    }
  }

  getPanier(): PanierItem[]{
    return this.list.slice();
    // return [...this.list];
  }

}
