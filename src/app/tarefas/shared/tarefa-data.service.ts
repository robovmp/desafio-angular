import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarefa } from './tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaDataService {

  constructor() { }

  private tarefaFonte = new BehaviorSubject( { tarefa: {titulo: '', anotacao: ''}, key: '' } );
  tarefaAtual = this.tarefaFonte.asObservable();

  mudarTarefa( tarefa: Tarefa, key: string ) {
    this.tarefaFonte.next( { tarefa: tarefa, key: key} )
  }

}
