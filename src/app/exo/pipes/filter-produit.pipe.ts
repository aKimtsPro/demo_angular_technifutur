import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Pipe({
  name: 'sortProduit'
})
export class SortProduitPipe implements PipeTransform {

  transform(value: Produit[], tri?: 'marque'|'prix'|'stock', asc: boolean = true): Produit[] {
    const clone = new Array<Produit>(...value);

    switch(tri){
      case 'marque':
        clone.sort( this.compareMarque );
        break;
      case 'prix':
        clone.sort( this.comparePrix );
        break;
      case 'stock':
        clone.sort( this.compareStock );
        break;
    }
    
    if(!asc)
      clone.reverse();
    
    return clone;
  }

  private compareMarque(p1:Produit, p2:Produit): number {
    return p1.marque.localeCompare(p2.marque);
  }

  private comparePrix(p1:Produit, p2:Produit): number {
    return p1.prix - p2.prix;
  }

  private compareStock(p1:Produit, p2:Produit): number {
    return p1.stock - p2.stock;
  }

}
