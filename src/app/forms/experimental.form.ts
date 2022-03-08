import { AbstractControl, AbstractControlOptions, ValidationErrors, Validators } from "@angular/forms";
import { multipleOf } from "./custom.validator";


type FormStruct = [{[key:string]: any}, AbstractControlOptions ];

export abstract class ProduitForm {
    public static get insert(): FormStruct {
        return [
            ProduitForm.PRODUIT_INSERT_FORM, 
            { validators: ProduitForm.globalValidation } 
        ];
    }

    public static readonly PRODUIT_INSERT_FORM = {
        'marque': ['', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
        'modele': [undefined,[Validators.minLength(1), Validators.maxLength(30)]],
        'prix' : [0, [Validators.required, Validators.min(0)]],
        'stock' : [1, [Validators.min(1), Validators.max(99), multipleOf(2)]],
        'en_vente' : [true]
    }
    public static get globalValidation(){
        return [
            ProduitForm.priceDoubleStock, 
            ProduitForm.modeleMarqueValidator
        ]
    }
    private static priceDoubleStock(control: AbstractControl) : ValidationErrors | null {
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
    private static modeleMarqueValidator(control: AbstractControl) : ValidationErrors | null {
        const modele = <string> control.value.modele;
        const marque = <string> control.value.marque;
    
        if( modele?.startsWith(marque?.substring(0,2)))
            return null;
    
        return {
            'modele-marque-error': {
                modele: modele,
                marque: marque
            }
        }
    }
}