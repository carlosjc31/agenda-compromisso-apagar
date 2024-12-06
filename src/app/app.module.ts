import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAgendaComponent } from './lista-agenda/lista-agenda.component';
import { FormAgendaComponent } from './form-agenda/form-agenda.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaListaComponent,
    AgendaFormComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
