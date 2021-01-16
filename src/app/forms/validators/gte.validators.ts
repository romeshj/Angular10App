import { FormGroup } from '@angular/forms';

export function GTE(controlName: string, requiredValue: number) {	
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
		//console.log(control, requiredValue)
        if (!control) {
          return null;
        }
       
		if (control.errors && !control.errors.gte) {
            return null;
        }
		
		let v: number = +control.value;
 
		if (isNaN(v) || v <= +requiredValue) {
		  control.setErrors({ gte: true, requiredValue : requiredValue });
		}
		else 
		{
		  control.setErrors(null);
		}
    }
}