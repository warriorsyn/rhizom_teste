import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedbackComponent } from './components/feedback/feedback.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    ButtonComponent,
    HeaderComponent,
    FeedbackComponent,
  ],
  imports: [CommonModule, MatToolbarModule],
  exports: [
    ToolbarComponent,
    ButtonComponent,
    HeaderComponent,
    FeedbackComponent,
  ],
})
export class SharedModule {}
