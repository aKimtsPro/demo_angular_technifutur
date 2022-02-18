import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo-enfant',
  templateUrl: './exo-enfant.component.html',
  styleUrls: ['./exo-enfant.component.css']
})
export class ExoEnfantComponent implements OnInit {

  @Output('clicked-square')
  emitter = new EventEmitter();

  @Input()
  isRedAbove: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickSquare(){
    this.emitter.emit();
  }

}
