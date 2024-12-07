import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';
import { Agenda } from '../agenda';

@Component({
  selector: 'app-lista-agenda',
  standalone: false,
  templateUrl: './lista-agenda.component.html',
  styleUrl: './lista-agenda.component.css'
})
export class AgendaListaComponent implements OnInit {

  agendas: Agenda[] = [];

  constructor(private agendaService: AgendaService,
              private router: Router
  ) {}

  ngOnInit(): void {
    this.agendaService.getAgendas().subscribe(data =>{
      this.agendas = data;
    });
    }

  delete(agenda: Agenda) {
    this.agendaService.delete(agenda).subscribe({
      next:() => this.loadAgendas()
    });
    }
  loadAgendas(): void {
    this.agendaService.getAgendas().subscribe(data => {
      this.agendas = data;
    });
  }

  create() {
    this.router.navigate(['/agendas']);
    }
}
