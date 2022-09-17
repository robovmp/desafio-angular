import { Injectable } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Tarefa } from './tarefa';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor( private database: AngularFireDatabase ) { }

  insert( tarefa: Tarefa ) {
    this.database.list( 'tarefa' ).push( tarefa )
      .then( ( res: any ) => console.log( res.key ) )
      .catch( (err) => console.log(err) );
  }

  getAll() {
    return this.database.list('tarefa')
      .snapshotChanges()
      .pipe(
        map( (mudancas: any) => {
          return mudancas.map( (data: any) => ( { key: data.payload.key, ...data.payload.val() } ) );
        } )
      );
  }

  update( tarefa: Tarefa, key: string ) {
    this.database.list( 'tarefa' ).update( key, tarefa )
      .then( ( res: any ) => console.log(res) )
      .catch( (err: any) => console.log(err) );
  }

  delete( key: string ) {
    this.database.object( `tarefa/${key}` ).remove();
  }

}
