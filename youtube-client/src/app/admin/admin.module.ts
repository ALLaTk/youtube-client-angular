import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { CreateCardPageComponent } from './pages/create-card-page/create-card-page.component';
import { SharedModule } from '../shared/shared.module';
import { DateValidatorService } from './services/date-validator.service';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [AdminComponent, CreateCardPageComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [DateValidatorService, AdminService],
})
export class AdminModule {}
