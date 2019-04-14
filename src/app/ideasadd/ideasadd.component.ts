import { Component, OnInit } from '@angular/core';
import {ComunicacionService} from '../servicios/comunicacion.service';
import {MensajeriaService} from '../servicios/mensajeria.service';
import { NgFlashMessageService } from 'ng-flash-messages';

interface ObjetoVideo {
  title:string;
  details:string;
  }

@Component({
  selector: 'app-ideasadd',
  templateUrl: './ideasadd.component.html',
  styleUrls: ['./ideasadd.component.css']
})
export class IdeasaddComponent implements OnInit {
  arraymensajes:any;

  titulo:string;
  details:string;
  resultado:string;  
  constructor(
    private com:ComunicacionService,
    private msj:MensajeriaService,
    private ngFlashMessageService: NgFlashMessageService) {
      }
  ngOnInit() {
  }
  botoLogin(){
    const objetoEnviar:ObjetoVideo= {
      title: this.titulo,
      details : this.details
    }
    this.com.EnviarVideo(objetoEnviar)
    .subscribe((recive:any)=>{
      console.log(recive);
      if (recive.success){
      this.ngFlashMessageService.showFlashMessage({
        // Array of messages each will be displayed in new line
        messages: [recive.msg], 
        // Whether the flash can be dismissed by the user defaults to false
        dismissible: true, 
        // Time after which the flash disappears defaults to 2000ms
        timeout: false,
        // Type of flash message, it defaults to info and success, warning, danger types can also be used
        type: 'success'
      });}

      else if (!recive.success){
        this.ngFlashMessageService.showFlashMessage({
          // Array of messages each will be displayed in new line
          messages: [recive.msg], 
          // Whether the flash can be dismissed by the user defaults to false
          dismissible: true, 
          // Time after which the flash disappears defaults to 2000ms
          timeout: false,
          // Type of flash message, it defaults to info and success, warning, danger types can also be used
          type: 'danger'
        });

      }
      this.arraymensajes=recive;     
            
    });  
  }
}
