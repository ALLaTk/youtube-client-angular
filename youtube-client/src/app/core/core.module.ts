import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderService } from './services/header.service';
import { AuthService } from '../auth/services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ApiKeyInterceptor } from './interceptor/api-key.interceptor';
import { ApiUrlInterceptor } from './interceptor/api-url.interceptor';
import { DataApiService } from './services/data-api.service';
import { SearchResultService } from './services/search-result.service';
import { DataControlService } from './services/data-control.service';

@NgModule({
  declarations: [HeaderComponent, NotFoundPageComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule, HttpClientModule],
  providers: [
    HeaderService,
    AuthService,
    AuthGuard,
    DataApiService,
    SearchResultService,
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
