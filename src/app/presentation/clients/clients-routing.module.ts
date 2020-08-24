import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientUpdateComponent } from './client-update/client-update.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: '',
        component: ClientListComponent,
      },
      {
        path: 'cadastro',
        component: ClientCreateComponent,
      },
      {
        path: ':id/atualizar',
        component: ClientUpdateComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
