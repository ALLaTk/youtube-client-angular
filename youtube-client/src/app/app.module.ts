import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { YoutubeModule } from './youtube/youtube.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    CoreModule,
    SharedModule,
    YoutubeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
