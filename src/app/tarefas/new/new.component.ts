import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../shared/tarefa';
import { TarefaService } from '../shared/tarefa.service';
import { TarefaDataService } from '../shared/tarefa-data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  tarefa: Tarefa = {
    titulo: '',
    anotacao: ''
  }
  key: string='';

  constructor( private tarefaService: TarefaService,
               private tarefaDataService: TarefaDataService ) { }

  ngOnInit(): void {

    this.tarefa = new Tarefa();

  }

  onSubmit() {

    if( this.tarefa.titulo == '' ) {
      return alert( 'Por favor, adicionar título a tarefa!' )
    }

    if( this.tarefa.anotacao == '' ) {
      return alert( 'Por favor, adicionar corpo de texto a anotação!' )
    }

    this.tarefaService.insert( this.tarefa )

    this.tarefa = new Tarefa();
  }

  cancel() {
    this.tarefa = new Tarefa();
  }

}
