import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [
    ToolbarComponent,
    ButtonComponent,
    HeaderComponent,
    FeedbackComponent,
  ],
  imports: [CommonModule, MatToolbarModule, TextMaskModule],
  exports: [
    ToolbarComponent,
    ButtonComponent,
    HeaderComponent,
    FeedbackComponent,
    TextMaskModule,
  ],
})
export class SharedModule {}
