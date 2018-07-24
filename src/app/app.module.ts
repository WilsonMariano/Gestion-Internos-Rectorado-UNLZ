import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxSpinnerModule } from 'ngx-spinner';

import { ROUTING } from './rutas.route';

import { HttpService } from './services/http.service';

import { AppComponent } from './app.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { OficinasComponent } from './components/oficinas/oficinas.component';
import { ModalOficinaComponent } from './components/modal-oficina/modal-oficina.component';
import { InternosComponent } from './components/internos/internos.component';
import { ModalInternoComponent } from './components/modal-interno/modal-interno.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    PrincipalComponent,
    OficinasComponent,
    ModalOficinaComponent,
    InternosComponent,
    ModalInternoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ROUTING,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
