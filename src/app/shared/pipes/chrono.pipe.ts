import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chrono',
  pure: false
})
export class ChronoPipe implements PipeTransform {

  transform(value: Chrono, version: 'smol'|'mid'|'long' = 'mid'): string {
    
    switch(version){
      case 'smol':
        return value.minute + ":" + value.seconde;
      case 'mid':
        return value.minute + "m" + value.seconde + "s";  
      case 'long':
        return value.minute + " minutes et " + value.seconde + "secondes";
    }
  }

}
