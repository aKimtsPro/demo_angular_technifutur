import { AbstractControlOptions, Validators } from "@angular/forms";
import { of } from "rxjs";

export const PRODUIT_INSERT_FORM = {
    id: ['', Validators.required],
    marque: [''],
    modele: [''],
    prix: [0, [Validators.required, Validators.min(0)]],
    stock: [1, Validators.min(0)]
}


