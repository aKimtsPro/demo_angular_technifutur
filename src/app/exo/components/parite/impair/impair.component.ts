import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-impair',
  templateUrl: './impair.component.html',
  styleUrls: ['./impair.component.css']
})
export class ImpairComponent implements OnInit {

  nombre: number

  constructor(private route: ActivatedRoute) {
    this.nombre = route.snapshot.params['nbr'];
  }

  ngOnInit(): void {
  }

}
