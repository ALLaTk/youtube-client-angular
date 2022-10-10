import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FilterComponent } from '../youtube/components/filter/filter.component';

@NgModule({
  declarations: [HeaderComponent, FilterComponent],
  exports: [HeaderComponent, FilterComponent],
  imports: [CommonModule],
})
export class CoreModule {}
