import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultService } from './services/search-result.service';
import { FilterService } from './services/filter.service';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    FilterComponent,
    SearchResultPageComponent,
  ],
  exports: [SearchItemComponent, SearchResultsComponent, FilterComponent],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [SearchResultService, FilterService],
})
export class YoutubeModule {}
