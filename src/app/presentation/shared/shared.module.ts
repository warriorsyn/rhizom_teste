import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [ToolbarComponent, ButtonComponent, HeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [ToolbarComponent, ButtonComponent, HeaderComponent],
})
export class SharedModule {}
