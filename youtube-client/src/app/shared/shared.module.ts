import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BorderItemDirective } from './directives/border-item.directive';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [BorderItemDirective, SortingPipe],
  exports: [BorderItemDirective, SortingPipe, MatButtonModule],
  imports: [CommonModule, MatButtonModule],
})
export class SharedModule {}
