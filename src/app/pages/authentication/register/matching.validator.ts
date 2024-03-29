import { FormGroup } from '@angular/forms';

export function MatchingValidator(
  controlName: string,
  matchingControlName: string,
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];

    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.matchingValidator) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ matchingValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
