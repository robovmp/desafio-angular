import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { EditComponent } from '../edit/edit.component';
import { TarefaService } from '../shared/tarefa.service';
import { TarefaDataService } from '../shared/tarefa-data.service';
import { Tarefa } from '../shared/tarefa';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  tarefas: Observable<any>;

  constructor( public dialog: MatDialog, private tarefaService: TarefaService, public tarefaDataService: TarefaDataService ) { }

  ngOnInit(): void {

    this.tarefas = this.tarefaService.getAll();
  }

  openDialog(tarefa: Tarefa, key: string) {
    this.dialog.open(EditComponent, {
      height: '90%',
      width: '90%'
    
    });

    this.tarefaDataService.mudarTarefa( tarefa, key );
  }

  delete(key: string) {
    this.tarefaService.delete(key);
  }

}
