import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css']
})
export class PairComponent implements OnInit {
  nombre: number

  constructor(private route: ActivatedRoute) {
    this.nombre = route.snapshot.params['nbr'];
  }

  ngOnInit(): void {
  }

}
