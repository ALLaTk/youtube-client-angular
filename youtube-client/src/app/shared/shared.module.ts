import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ColorItemDirective } from './directives/color-item.directive';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [ColorItemDirective, SortingPipe],
  exports: [ColorItemDirective, SortingPipe, MatButtonModule],
  imports: [CommonModule, MatButtonModule],
})
export class SharedModule {}
