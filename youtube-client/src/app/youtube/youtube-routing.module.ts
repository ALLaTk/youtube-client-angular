import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardInfoPageComponent } from './pages/add-card-info-page/add-card-info-page/add-card-info-page.component';
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
  {
    path: 'card/:id',
    component: AddCardInfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
