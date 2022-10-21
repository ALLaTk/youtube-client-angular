import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ColorItemDirective } from './directives/color-item.directive';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [ColorItemDirective, SortingPipe],
  exports: [
    ColorItemDirective,
    SortingPipe,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
