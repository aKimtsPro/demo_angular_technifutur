import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { Tache } from '../models/tache.model';

@Component({
  selector: 'app-tache-item',
  templateUrl: './tache-item.component.html',
  styleUrls: ['./tache-item.component.css']
})
export class TacheItemComponent implements OnInit {

  @Input()
  tache!: Tache;

  @Input('first')
  isFirst?: boolean;
  
  @Input('last')
  isLast?: boolean;

  @Output('move')
  moveEmitter = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit(): void {
  }

  move(up: boolean){
    this.moveEmitter.emit(up);
  }

}
