import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agenda } from './agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  delete(agenda: Agenda) {
    throw new Error('Method not implemented.');
  }

  private url = 'http://localhost:3000/agendas';

  constructor(private http: HttpClient) { }

  getAgendas(): Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.url);
  }

  getAgendasById(id: number): Observable<Agenda> {
    return this.http.get<Agenda>(`${this.url}/${id}`);
  }
  
  delete(agenda: Agenda): Observable<void> {
    return this.http.delete<void>(`${this.url}/${agenda.id}`);
  }
}
