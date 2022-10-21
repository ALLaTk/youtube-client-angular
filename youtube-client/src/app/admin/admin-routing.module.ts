import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCardPageComponent } from './pages/create-card-page/create-card-page.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCardPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
