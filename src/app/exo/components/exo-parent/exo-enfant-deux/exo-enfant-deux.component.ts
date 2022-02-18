import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exo-enfant-deux',
  templateUrl: './exo-enfant-deux.component.html',
  styleUrls: ['./exo-enfant-deux.component.css']
})
export class ExoEnfantDeuxComponent implements OnInit {

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
