import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import { MustMatch } from '../validators/must-match.validators';

@Directive({
  selector: '[appMustMatch]',
  providers: [{
	provide: NG_VALIDATORS,
	useExisting : MustMatchDirective,
	multi : true
  }]
})
export class MustMatchDirective implements Validator {

  @Input('appMustMatch') appMustMatch: string[] = [];
  
  validate(formGroup : FormGroup) : ValidationErrors{
	return MustMatch(this.appMustMatch[0], this.appMustMatch[1])(formGroup)
  }

}
