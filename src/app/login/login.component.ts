import { Component, OnInit } from '@angular/core';
import {ComunicacionService} from '../servicios/comunicacion.service';
import {NgFlashMessageService} from 'ng-flash-messages';

interface data {
  success:boolean;
  msg:string;
  user:string;
  token:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Email:string;
  Password:string;

  constructor(
    private Com:ComunicacionService,
    private flash:NgFlashMessageService

  ) { }

  ngOnInit() {
  }

  go(){
    const user={
      Email:this.Email,
      Password:this.Password
    }

    this.Com.Login(user)
    .subscribe((data:data)=>{
      if (data.success){
        localStorage.setItem('token',data.token);
        localStorage.setItem('user',data.user);
        this.flash.showFlashMessage({
          messages:[data.msg],
          dismissible:true,
          timeout:false,
          type:'success'  
        }) 

      }

      if (!data.success) {
        this.flash.showFlashMessage({
          messages:[data.msg],
          dismissible:true,
          timeout:false,
          type:'danger'
        })
      }
      
    })



  }

}
