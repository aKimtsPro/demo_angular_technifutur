import { AbstractControl, ValidationErrors, Validators as V } from "@angular/forms";
import { FormContent, FormStruct } from "./forms";

export const PLAT_INSERT_FORM: FormContent = {
    nom: ['', [V.required, V.minLength(2)]],
    type: ['plat', [V.required, platTypeValid]],
    prix: [0, [V.required, V.min(0)]]
};

function platTypeValid(control: AbstractControl) : ValidationErrors | null {
    if(control.value == 'plat' || 
        control.value == 'entree' ||
        control.value == 'dessert')
        return null;


    return {
        typeInvalid: {
            acceptableValue: ['plat', 'entree', 'dessert'],
            value: control.value
        }
    }
}