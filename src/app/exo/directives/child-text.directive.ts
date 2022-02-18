import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[child-text]'
})
export class ChildTextDirective implements OnInit {

  @Input('child-text')
  text?: string;

  @Output('element-created')
  emitter = new EventEmitter();

  constructor(private _ref : ElementRef) { }

  ngOnInit(): void {
    this.createNewChild();
  }

  createNewChild(){
    const child = document.createElement('p');

    child.innerText = (this.text ? this.text : 'bonjour') + '(created)';
    child.onclick = () => this.createNewChild();

    this._ref.nativeElement.appendChild(child);
    this.emitter.emit();
  }

}