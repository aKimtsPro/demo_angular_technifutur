import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[style-bg-green]'
})
export class GreenBgDirective implements OnInit {

  @Output('style-bg-green')
  emitter = new EventEmitter<string>()

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
  
    setInterval( () => {
      const previous_bg = this.element.nativeElement.style.backgroundColor;
      const next_bg = previous_bg == 'green' ? 'lightgreen' : 'green';
      this.element.nativeElement.style.backgroundColor = next_bg;
      this.emitter.emit(next_bg);
    }, 1000)
    
  }

}
