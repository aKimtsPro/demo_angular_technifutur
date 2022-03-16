import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ColorSwapService } from 'src/app/services/color-swap.service';
import { ConnexionService } from 'src/app/services/connexion.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  connexionForm: FormGroup;

  constructor(
    builder: FormBuilder, 
    private service: ConnexionService
  ) {
    this.connexionForm = builder.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.service.connect(this.connexionForm.value))
      alert("vous êtes connecté")
    else
      alert("username/password invalide(s)")
  }


  isConnected(){
    return this.service.isConnected;
  }

}
