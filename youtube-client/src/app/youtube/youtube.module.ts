import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SearchItemComponent, SearchResultsComponent],
  exports: [SearchItemComponent, SearchResultsComponent],
  imports: [CommonModule, SharedModule],
})
export class YoutubeModule {}
