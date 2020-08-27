import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation.component';

const routes: Routes = [
  { path: '', redirectTo: '/cliente', pathMatch: 'full' },
  { path: '**', redirectTo: '/cliente', pathMatch: 'full' },
  {
    path: '',
    component: PresentationComponent,
    children: [
      {
        path: 'cliente',
        loadChildren: () =>
          import('./clients/clients.module').then((md) => md.ClientsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationRoutingModule {}
