import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { CarBrandRepository } from './core/repositories/carbrand/carbrand.repository';
import { CarbrandWebRepository } from './data/carbrand/carbrand-web-repository/carbrand-web.repository';
import { ClientRepository } from './core/repositories/client/client.repository';
import { ClientMockRepository } from './data/client/client-mock-repository/client-mock-repository';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: CarBrandRepository, useClass: CarbrandWebRepository },
    { provide: ClientRepository, useClass: ClientMockRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
