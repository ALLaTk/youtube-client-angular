import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderItemDirective } from './directives/border-item.directive';
import { SortingPipe } from './pipes/sorting.pipe';

@NgModule({
  declarations: [BorderItemDirective, SortingPipe],
  exports: [BorderItemDirective, SortingPipe],
  imports: [CommonModule],
})
export class SharedModule {}
