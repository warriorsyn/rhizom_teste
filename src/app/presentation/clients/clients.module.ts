import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ClientUpdateComponent } from './client-update/client-update.component';
@NgModule({
  declarations: [
    ClientsComponent,
    ClientListComponent,
    ClientCreateComponent,
    ClientFormComponent,
    ClientUpdateComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ],
})
export class ClientsModule {}
