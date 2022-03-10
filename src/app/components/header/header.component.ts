import { Component, Input, OnInit } from '@angular/core';
import { ColorSwapService } from 'src/app/services/color-swap.service';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title!: string;

  objectif?: string;

  couleur = 'lightseagreen'

  constructor(
    private service: ObjectifService,
    private swapService: ColorSwapService
  ) {
    this.objectif = service.getObjectif();
    service.obsObjectif.subscribe(info =>{
      alert('emission d\'info');
      this.objectif = info;
    } );

    swapService.swapObs.subscribe(info => {
      if(info)
        this.couleur = info;
      else
        this.couleur = this.couleur == 'lightseagreen' ? 'burlywood' : 'lightseagreen';
    });
  }

  ngOnInit(): void {
  }

  // getObjectif(){
  //   return this.service.getObjectif()
  // }

}
