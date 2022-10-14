import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from './services/header.service';
import { AuthService } from '../auth/services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule],
  providers: [HeaderService, AuthService, AuthGuard],
})
export class CoreModule {}
