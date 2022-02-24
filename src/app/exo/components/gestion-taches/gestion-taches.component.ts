import { Component, OnInit } from '@angular/core';
import { Tache } from './models/tache.model';
import { TaskAddEvent } from './models/task-add-event.model';

@Component({
  selector: 'app-gestion-taches',
  templateUrl: './gestion-taches.component.html',
  styleUrls: ['./gestion-taches.component.css']
})
export class GestionTachesComponent implements OnInit {

  listTache: Tache[] = [
    {
      nom: "manger",
      date_creation: new Date()
    },
    {
      nom: "dormir",
      date_creation: new Date()
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(event: TaskAddEvent){
    if(event.up)
      this.listTache.unshift(event.task);
    else
      this.listTache.push(event.task);
  }

  onTaskMove(index: number, up: boolean){
    const toMove = this.listTache[index];
    if((up && index === 0) || (!up && index === this.listTache.length-1))
      return;

    const indexModifier = up ? -1 : 1;
    this.listTache.splice(index, 1);
    this.listTache.splice(index+indexModifier, 0, toMove);
  }

}
