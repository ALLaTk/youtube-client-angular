import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemInformationPageComponent } from './pages/item-information-page/item-information-page.component';
import { SearchResultPageComponent } from './pages/search-result-page/search-result-page.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultPageComponent,
  },
  {
    path: ':id',
    component: ItemInformationPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
