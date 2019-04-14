import { Component, OnInit } from '@angular/core';
import {ComunicacionService} from '../servicios/comunicacion.service';
import {NgFlashMessageService} from 'ng-flash-messages';
import { timeoutWith } from 'rxjs/operators';


interface data{
  msg:string
}

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.css']
})
export class IdeasComponent implements OnInit {

  
  datosObtenidos:any;
  editVideo:any;
  constructor(
    private comuniqueme :ComunicacionService,
    private flash :NgFlashMessageService
    
  ) {}

  ngOnInit() {
  }
  muestredelservidor(){
    this.comuniqueme.ObtenerDatos()
    .subscribe((data:any)=>{
      this.datosObtenidos=data;
      this.flash.showFlashMessage({
        messages:['Se ha descagado sus productos de la base de datos'],
        dismissible:true,
        timeout:false,
        type:'success'
      });
      
    });
  }
  
  borrar(id,elemento){
    this.datosObtenidos = this.datosObtenidos.filter(a=>a !== elemento);
    console.log('enviando id'+id);
    this.comuniqueme.Borrar(id)
    .subscribe((data:data)=>{
      console.log(data.msg);
      this.flash.showFlashMessage({
        messages:['Producto Eliminado  de la base de datos MIJO'],
        dismissible:true,
        timeout:false,
        type:'success'
      });
    })
  }
}
