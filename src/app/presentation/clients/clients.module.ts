import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientListComponent } from './client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClientCreateComponent } from './client-create/client-create.component';

@NgModule({
  declarations: [ClientsComponent, ClientListComponent, ClientCreateComponent],
  imports: [CommonModule, ClientsRoutingModule, SharedModule],
})
export class ClientsModule {}
