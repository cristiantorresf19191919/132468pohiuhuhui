import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  mensajes :string[] = [];

  mostrarMensajes(serverMsgs){
    this.mensajes.push(serverMsgs);
    
  }

  clear(){
    this.mensajes = [];
  }


  constructor() {
    
   }
}
