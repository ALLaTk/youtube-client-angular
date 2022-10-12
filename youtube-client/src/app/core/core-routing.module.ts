import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchResultsComponent } from '../youtube/components/search-results/search-results.component';
import { HeaderPageComponent } from './pages/header-page/header-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderPageComponent,
  },
  {
    path: './youtube/youtube.module',
    component: SearchResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
