import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  showNoSale = true;
  sortingMethod?: 'marque'|'prix'|'stock'; 
  asc: boolean = true;
  products: Produit[] = [
    {
      marque: 'BonApp',
      modele: 'SuperPizza',
      prix: 8,
      stock: 10,
      en_vente: true
    },
    {
      marque: 'Atous',
      modele: 'SofaToi',
      prix: 500,
      stock: 3,
      en_vente: false
    },
    {
      marque: 'Fruitalique',
      prix: 2,
      stock: 0,
      en_vente: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onToggleEnVente(toToggle: Produit){
    toToggle.en_vente = !toToggle.en_vente;
  }

  onDelete(index: number){
    if( confirm('vous êtes sur ?') )
      this.products.splice(index, 1);
  }

}
