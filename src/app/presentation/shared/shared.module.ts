import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [ToolbarComponent, ButtonComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [ToolbarComponent, ButtonComponent],
})
export class SharedModule {}
