import { Component, OnInit } from '@angular/core';
import {MensajeriaService} from '../servicios/mensajeria.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {º

  constructor(
    public mensajeriaService:MensajeriaService
  ) { 
    
  }

  ngOnInit() {
  }

}
