import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskAddEvent } from '../models/task-add-event.model';

@Component({
  selector: 'app-creer-tache',
  templateUrl: './creer-tache.component.html',
  styleUrls: ['./creer-tache.component.css']
})
export class CreerTacheComponent implements OnInit {

  tacheNom!: string;
  colorTache: string = 'rgb(245, 245, 130)';

  @Output("add")
  addUp= new EventEmitter<TaskAddEvent>()

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(up: boolean){
    if( this.canAdd() )
      this.addUp.emit({
        task: {
          nom: this.tacheNom,
          date_creation: new Date(),
          color: this.colorTache
        },
        up: up
      });
  }

  canAdd(){
    return this.tacheNom && this.tacheNom.trim();
  }

}
