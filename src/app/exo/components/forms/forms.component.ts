import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  produitForm = new FormGroup({
    nom: new FormControl(),
    prix: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const message = "nom: "+ this.produitForm.value.nom+ " | prix: "+ this.produitForm.value.prix;
    // const m = `nom : ${this.produitForm.value.nom} | prix: ${this.produitForm.value.prix}`
    alert(message);
  }

}
