import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo-parent',
  templateUrl: './exo-parent.component.html',
  styleUrls: ['./exo-parent.component.css']
})
export class ExoParentComponent implements OnInit {

  redAbove = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClickedSquare(){
    this.redAbove = !this.redAbove;
  }

}
