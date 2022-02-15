import { Validators } from "@angular/forms";

export const PRODUIT_INSERT_FORM = {
    id: ['', Validators.required],
    marque: [''],
    modele: [''],
    prix: [0, [Validators.required, Validators.min(0)]],
    stock: [1, Validators.min(0)]
}