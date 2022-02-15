import { Component, OnInit } from '@angular/core';
import { min } from 'rxjs';
import { Chrono } from 'src/app/models/chrono.model';

@Component({
  selector: 'app-exo-chrono',
  templateUrl: './exo-chrono.component.html',
  styleUrls: ['./exo-chrono.component.css']
})
export class ExoChronoComponent implements OnInit {

  chrono: Chrono = {
    minute: 0,
    seconde: 0
  }
  interval?: any;
  format: 'small'|'mid'|'long' = 'mid';

  constructor() {
  }

  ngOnInit(): void {
  }

  play(){
    if( !this.interval ){
      this.interval = setInterval( () => {
        if(this.chrono.seconde === 59){
          this.chrono.minute++;
          this.chrono.seconde=0;
        }
        else {
          this.chrono.seconde++;
        }
      }  , 1000);
    }
  }

  pause(){
    if(this.interval){
      clearInterval(this.interval)
      this.interval = undefined;
    }
  }

  reset(){
    if( this.canReset() ){
      this.chrono.minute = 0;
      this.chrono.seconde = 0;
    }
  }

  canReset(): boolean {
    return !this.interval && (this.chrono.minute !== 0 || this.chrono.seconde != 0);
  }
}
