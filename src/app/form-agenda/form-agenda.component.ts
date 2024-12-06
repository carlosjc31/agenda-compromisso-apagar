import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-form-agenda',
  standalone: false,

  templateUrl: './form-agenda.component.html',
  styleUrl: './form-agenda.component.css'
})
export class AgendaFormComponent implements OnInit {
  formGroupAgenda: FormGroup;
  isEditing: boolean = false;

  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private service: AgendaService,
              private formBuilder: FormBuilder) {
   this.formGroupAgenda = formBuilder.group({
     id:          [''],
     title:       [''],
     description: [''],
     date_hora:   [''],
     local:       ['']
   });
  }
  ngOnInit() {
    const id = Number(this.activatedRouter.snapshot.paramMap.get("id"));
    if(id != 0){
      this.isEditing = true;
      this.loadAgendas(id);
    }
  }

  loadAgendas(id: number) {
    this.service.getAgendasById(id).subscribe({
      next: data => this.formGroupAgenda.setValue(data)
    });
  }

  update() {
    this.service.updade(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/agendas'])
    });
  }

  save(){
    this.service.save(this.formGroupAgenda.value).subscribe({
      next: () => this.router.navigate(['/agendas'])
    })
  }
