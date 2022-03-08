import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProduitForm } from 'src/app/forms/experimental.form';
import { modeleMarqueValidator, priceDoubleStock, PRODUIT_INSERT_FORM } from 'src/app/forms/produit.form';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-insert-produit-form',
  templateUrl: './insert-produit-form.component.html',
  styleUrls: ['./insert-produit-form.component.css']
})
export class InsertProduitFormComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()

  produitInsertForm: FormGroup
  // = new FormGroup({
  //   'marque': new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]),
  //   'modele': new FormControl(undefined,[Validators.minLength(1), Validators.maxLength(30)]),
  //   'prix': new FormControl(0, [Validators.required, Validators.min(0)]),
  //   'stock': new FormControl(1, [Validators.min(1), Validators.max(99)]),
  //   'en_vente': new FormControl(true),
  // }, priceDoubleStock);

  constructor(builder: FormBuilder) {
    this.produitInsertForm = builder.group(PRODUIT_INSERT_FORM, {
      validators: [ priceDoubleStock, modeleMarqueValidator ]
    });
    // builder.group(...ProduitForm.insert)
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.produitInsertForm)

    if( this.produitInsertForm.valid ){
      this.produitSubmitted.emit({
        'marque': this.produitInsertForm.value.marque,
        'modele': this.produitInsertForm.value.modele,
        'prix': this.produitInsertForm.value.prix,
        'stock': isNaN(this.produitInsertForm.value.stock) ? 1 : this.produitInsertForm.value.stock, 
        'en_vente': this.produitInsertForm.value.en_vente
      })
    }
    
  }

}
