import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaListaComponent } from './lista-agenda/lista-agenda.component';
import { AgendaFormComponent } from './form-agenda/form-agenda.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo:'agendas', pathMatch: 'full' },
  { path: 'agendas', component: AgendaListaComponent },
  { path: 'agendas/:id', component: AgendaFormComponent },
  { path: 'agenda', component: AgendaFormComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
