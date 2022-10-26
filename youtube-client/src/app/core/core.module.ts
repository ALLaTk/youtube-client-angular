import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from './services/header.service';
import { AuthService } from '../auth/services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DataApiService } from './services/data-api.service';
import { SearchResultService } from './services/search-result.service';
import { AdminService } from '../admin/services/admin.service';
import { DataControlService } from './services/data-control.service';
import { ApiKeyInterceptor } from './interceptor/api-key.interceptor';
import { ApiUrlInterceptor } from './interceptor/api-url.interceptor';
import { youtubeReducer } from '../store/reducers/youtube.reducer';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({ video: youtubeReducer }, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    HeaderService,
    AuthService,
    AuthGuard,
    DataApiService,
    SearchResultService,
    AdminService,
    DataControlService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
