import { Directive,  Input } from '@angular/core';
import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
@Directive({
  selector: '[appGteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GteValidatorDirective, multi: true }
  ]
})
export class GteValidatorDirective implements Validator{

  @Input("gteNum") gteNum:number
 
  validate(c: FormControl) {
 
    let v: number = +c.value;
 
    if (isNaN(v)) {
      return { 'gte': true, 'requiredValue': this.gteNum }
    }
 
    if (v <= +this.gteNum) {
      return { 'gte': true, 'requiredValue': this.gteNum }
    }
 
    return null;
  }

}
