import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchSortingComponent } from './search/search-sorting/search-sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchSortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
