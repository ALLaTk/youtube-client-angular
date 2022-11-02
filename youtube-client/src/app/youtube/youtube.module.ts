import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SearchResultService } from '../core/services/search-result.service';
import { FilterService } from './services/filter.service';
import { FilterComponent } from './components/filter/filter.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';
import { ItemInformationPageComponent } from './pages/item-information-page/item-information-page.component';
import { AddCardComponent } from './components/search-results/add-card/add-card/add-card.component';
import { AddCardInfoPageComponent } from './pages/add-card-info-page/add-card-info-page/add-card-info-page.component';

@NgModule({
  declarations: [
    FilterComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchResultPageComponent,
    ItemInformationPageComponent,
    AddCardComponent,
    AddCardInfoPageComponent,
  ],
  imports: [CommonModule, SharedModule, YoutubeRoutingModule],
  providers: [SearchResultService, FilterService],
})
export class YoutubeModule {}
