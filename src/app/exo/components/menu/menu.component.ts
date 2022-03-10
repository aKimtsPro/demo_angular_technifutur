import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu!: Plat[]; 
  // = [
  //   {
  //     "id": 1,
  //     "nom": "pate",
  //     "type": "plat",
  //     "prix": 8
  //   },
  //   {
  //     "id": 2,
  //     "nom": "pizza",
  //     "type": "plat",
  //     "prix": 10
  //   },
  //   {
  //     "id": 3,
  //     "nom": "croquettes",
  //     "type": "entree",
  //     "prix": 6
  //   },
  //   {
  //     "id": 4,
  //     "nom": "glace",
  //     "type": "dessert",
  //     "prix": 4
  //   }
  // ];

  constructor(private service: PanierService, private client: HttpClient) { 
    client.get<Plat[]>("http://localhost:3000/plats")
      .subscribe(plats => this.menu = plats);
  }

  ngOnInit(): void {
  }

  onAdd(plat: Plat){
    this.service.addToCart(plat);
  }

}
