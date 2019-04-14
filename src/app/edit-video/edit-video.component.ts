import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ComunicacionService} from '../servicios/comunicacion.service';
import {MensajeriaService} from '../servicios/mensajeria.service';
import {Location} from '@angular/common';
import { NgFlashMessageService } from 'ng-flash-messages';

interface data {
  msg:string,
  success:boolean
}

@Component({
  selector: 'app-edit-video',
  templateUrl: './edit-video.component.html',
  styleUrls: ['./edit-video.component.css']
})
export class EditVideoComponent implements OnInit {
  res:any;
  editVideo:any={};

  id=this.route.snapshot.paramMap.get('id');
  constructor(
    private route:ActivatedRoute,
    private Com:ComunicacionService,
    private loca:Location,
    private Msj:MensajeriaService,
    private ngFlashMessageService: NgFlashMessageService
     
  ) { }

  ngOnInit() {
    this.sendIdGet()
    
  }

  

  sendIdGet(){
    
    this.Com.OperacionConId(this.id)
    .subscribe((data:data)=>{
      this.editVideo=data;
      console.log(this.editVideo);
      if (data){
        this.ngFlashMessageService.showFlashMessage({
          messages:['Producto Encontrado'],
          dismissible:true,
          timeout:false,
          type:'success'
        });
      }
      else{
        this.ngFlashMessageService.showFlashMessage({
          messages:['Producto no se ha podido encontrar'],
          dismissible:true,
          timeout:false,
          type:'danger'
        });

      }
      
    })       
  }

  Putmethod(){
    console.log('editado');
    
    this.Com.UpdateVideo(this.editVideo,this.id)
    .subscribe((data:data)=>{
      
      if (data){
        this.res = data;
        this.ngFlashMessageService.showFlashMessage({
          messages:['Se ha Actualizado todo con exito compadre'],
          dismissible:true,
          timeout:false,
          type:'success'
        });

      }

      else {

        this.ngFlashMessageService.showFlashMessage({
          messages:['No se ha podido actualizar el video'],
          dismissible:true,
          timeout:false,
          type:'danger'
        })
      } 
      //this.loca.back();
    })        
  }

  
}
