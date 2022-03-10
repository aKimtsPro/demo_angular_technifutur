import { Component, OnInit } from '@angular/core';
import { ObjectifService } from 'src/app/services/objectif.service';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {

  inputObj!: string;

  constructor(private service: ObjectifService) { }

  ngOnInit(): void {
  }

  onSend(){
    this.service.setObjectif(this.inputObj);
  }

}
