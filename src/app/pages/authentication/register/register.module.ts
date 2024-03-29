import { CommonModule } from '@angular/common';
import { CodeInputModule } from 'angular-code-input';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../@fury/shared/material-components.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { OAuthModule } from '../../../layout/oauth/oauth.module';

@NgModule({
  imports: [
    CommonModule,
    CodeInputModule,
    RegisterRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    OAuthModule,
  ],
  declarations: [RegisterComponent],
})
export class RegisterModule {}
