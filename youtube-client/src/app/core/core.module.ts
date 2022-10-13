import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from './services/header.service';
import { AuthService } from '../auth/services/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  providers: [HeaderService, AuthService, AuthGuard],
})
export class CoreModule {}
