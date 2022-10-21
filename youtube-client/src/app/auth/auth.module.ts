import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { SignInPageComponent } from './pages/sign-in-page/sign-in-page.component';
import { SharedModule } from '../shared/shared.module';
import { PasswordValidatorService } from './services/password-validator.service';

@NgModule({
  declarations: [AuthComponent, SignInPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PasswordValidatorService],
})
export class AuthModule {}
