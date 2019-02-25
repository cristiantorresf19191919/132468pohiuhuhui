import { AbstractControl,ValidatorFn } from '@angular/forms';

export class ValidacionesPersonalizadas {

    static passwordMatcher(c: AbstractControl) {

        if (!c.get('password') || !c.get('password2')) return null;
        return c.get('password').value === c.get('password2').value ? null : { 'nomatch': true };
    }

    static Busque(nameRe: RegExp): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} | null => {
          const valide = nameRe.test(control.value);
          return !valide ? {'tieneArroba': {value: control.value}} : null;
        };  
      }

      static tieneNumero(nameRe: RegExp): ValidatorFn {     
        return (control: AbstractControl): {[key: string]: any} | null => {
          const valide = nameRe.test(control.value);
          return !valide ? {'tieneNumero': {value: control.value}} : null;
        };
      }


}