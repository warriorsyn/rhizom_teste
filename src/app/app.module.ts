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
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CarmodelRepository } from './core/repositories/carmodel/carmodel.repository';
import { CarmodelWebRepository } from './data/carmodel/carmodel-web-repository/carmodel-web.repository';
import { CepRepository } from './core/repositories/cep/cep.repository';
import { CepWebRepository } from './data/cep/cep-web.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    { provide: CarBrandRepository, useClass: CarbrandWebRepository },
    { provide: CarmodelRepository, useClass: CarmodelWebRepository },
    { provide: ClientRepository, useClass: ClientMockRepository },
    { provide: CepRepository, useClass: CepWebRepository },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
