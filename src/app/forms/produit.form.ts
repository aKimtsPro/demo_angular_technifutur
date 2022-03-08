import { AbstractControl, AbstractControlOptions, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import { multipleOf } from "./custom.validator";


export const PRODUIT_INSERT_FORM = {
    'marque': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    'modele': [undefined,[Validators.minLength(2), Validators.maxLength(30)]],
    'prix' : [0, [Validators.required, Validators.min(0)]],
    'stock' : [1, [Validators.min(1), Validators.max(99), multipleOf(2)]],
    'en_vente' : [true]
};

export function priceDoubleStock(control: AbstractControl) : ValidationErrors | null {
    const prix = control.value.prix;
    const stock = control.value.stock;

    if( prix >= 2*stock )
        return null;

    return {
        priceDoubleStock: {
            prix: prix,
            stock: stock,
            message: 'le prix devrait être le double du stock'
        }
    }
}

export function modeleMarqueValidator(control: AbstractControl) : ValidationErrors | null {
    const modele = control.value.modele as string | undefined;
    const marque = <string | undefined> control.value.marque;

    if( !marque || modele?.startsWith(marque.substring(0,2)) )
        return null;

    return {
        'modele-marque-error': {
            modele: modele,
            marque: marque
        }
    }
}

