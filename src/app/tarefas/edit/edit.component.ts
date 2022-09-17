import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { TarefaService } from '../shared/tarefa.service';
import { TarefaDataService } from '../shared/tarefa-data.service';
import { Tarefa } from '../shared/tarefa';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  tarefa: Tarefa= {
    titulo: '',
    anotacao: ''
  };
  key: string = '';

  constructor( public dialog: MatDialog, public tarefaService: TarefaService, public tarefaDataService: TarefaDataService ) { }

  ngOnInit(): void {
    this.tarefaDataService.tarefaAtual.subscribe( data => {
      this.tarefa.titulo = data.tarefa.titulo;
      this.tarefa.anotacao = data.tarefa.anotacao;
      this.key = data.key
    } )
  
  }

  close(){
    this.dialog.closeAll();
  }

  update() {
    if( this.tarefa.anotacao == '' ){
      return alert( 'Não é possível salvar sem anotação!' )
    }
    this.tarefaService.update( this.tarefa, this.key  )
    this.dialog.closeAll();
  }

}
