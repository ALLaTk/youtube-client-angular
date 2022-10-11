import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from '../youtube/components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from './services/header.service';

@NgModule({
  declarations: [HeaderComponent, FilterComponent],
  exports: [HeaderComponent, FilterComponent],
  imports: [CommonModule, SharedModule],
  providers: [HeaderService],
})
export class CoreModule {}
