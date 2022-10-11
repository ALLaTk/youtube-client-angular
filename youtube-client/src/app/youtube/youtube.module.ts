import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultService } from './services/search-result.service';

@NgModule({
  declarations: [SearchItemComponent, SearchResultsComponent],
  exports: [SearchItemComponent, SearchResultsComponent],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [SearchResultService],
})
export class YoutubeModule {}
