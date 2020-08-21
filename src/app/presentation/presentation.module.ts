import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [PresentationComponent],
  imports: [CommonModule, PresentationRoutingModule, SharedModule],
})
export class PresentationModule {}
