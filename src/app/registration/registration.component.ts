import { Component, OnInit } from '@angular/core';
import {ComunicacionService} from '../servicios/comunicacion.service';
import {NgFlashMessageService} from 'ng-flash-messages';
interface data {
  success: boolean;
  msg:string;
  password:string;
  hash:string;
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  name:string;
  Email:string;
  username:string;
  password:string;
  password2:string;

  constructor(
    private com:ComunicacionService,
    private msj:NgFlashMessageService
  ) { }

  ngOnInit() {

  }

  go(){
    const user = {
      name:this.name,
      email:this.Email,
      username:this.username,
      password: this.password,
      password2:this.password2
    }

    this.com.Registro(user)
    .subscribe((data:data)=>{
      if (data.success){
        this.msj.showFlashMessage({
          messages:[data.msg, 'COntraseña encriptada por hash -> ',data.hash],
          dismissible:true,
          timeout:false,
          type:'success'
        })

      }

      if (data.msg==='El correo ya se encuentra registrado'){
        this.msj.showFlashMessage({
          messages:[data.msg],
          dismissible:true,
          timeout:false,
          type:'danger'
        });
      }
      
      if (!data.success){
        this.msj.showFlashMessage({
          messages:[data.msg],
          dismissible:true,
          timeout:false,
          type:'danger'

        })
      }

    })
  }



}
