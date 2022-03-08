import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

    
function pair(control: AbstractControl) : ValidationErrors | null {
    // return multipleOf(2)(control);
    
    if( !control.value || control.value % 2 === 0 )
        return null;

    return {
        pair: {
            message: 'devrait être pair'
        }
    }
}

export function multipleOf(nbr: number): ValidatorFn {
    return function (control: AbstractControl) : ValidationErrors | null {
        if( !control.value && control.value % nbr === 0 )
            return null;

        return {
            multipleOf: {
                nbr: control.value,
                multipleOf: nbr,
                message: `La valeur devrait être un multiple de ${nbr}`
            }
        }
    }
}

