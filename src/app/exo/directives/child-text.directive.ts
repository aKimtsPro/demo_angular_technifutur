import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[child-text]'
})
export class ChildTextDirective implements OnInit {

  @Input('child-text')
  text?: string;

  constructor(private _ref : ElementRef) { }

  ngOnInit(): void {
    this.createNewChild();
  }

  createNewChild(){
    const child = document.createElement('p');

    child.innerText = this.text ? this.text : 'bonjour';
    child.onclick = () => this.createNewChild();

    this._ref.nativeElement.appendChild(child);
    // this._ref.nativeElement.innerHTML = "<p>" + this.text + "</p>"
  }

}