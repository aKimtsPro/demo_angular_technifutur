import { Pipe, PipeTransform } from '@angular/core';
import { Chrono } from 'src/app/models/chrono.model';

@Pipe({
  name: 'chrono',
  pure: false
})
export class ChronoPipe implements PipeTransform {

  transform(value: Chrono, format:'small'|'mid'|'long' = 'mid'): string {
    const minute = value.minute < 10 ? '0'+value.minute : value.minute ;
    const seconde = value.seconde < 10 ? '0'+value.seconde : value.seconde ;

    switch(format){
      case 'small':
        return minute+":"+seconde;
      case 'mid':
        return minute+" m "+seconde+ " s";
      case 'long':
        return minute+" minutes et "+seconde+ " secondes";
    }

    
  }

}
