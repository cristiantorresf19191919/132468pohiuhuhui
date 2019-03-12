import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { ComunicacionService } from "../servicios/comunicacion.service";
import { NgFlashMessageService } from "ng-flash-messages";
import { Router } from "@angular/router";
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from "ngx-loading";
import { animations } from "ack-angular-fx";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";
import Swal from "sweetalert2";
import { Usuario } from "../models/usuario.model";

interface Response {
  success: boolean;
  msg: string;
  clientes: any;
}

@Component({
  animations: animations,
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {

  @ViewChild("ngxLoading") ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild("customLoadingTemplate") customLoadingTemplate: TemplateRef<any>;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = "rgb(42, 206, 42)";
  public secondaryColour = "rgb(247, 64, 8)";
  public coloursEnabled = false;
  public loadingTemplate: TemplateRef<any>;
  public fullscreenloadingdecision = true;
  public radio = "20px";
  public colorback = "rgba(70, 70, 70, 0.384)";

  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    primaryColour: this.primaryColour,
    secondaryColour: this.secondaryColour,
    tertiaryColour: this.primaryColour,
    backdropBorderRadius: this.radio,
    fullScreenBackdrop: this.fullscreenloadingdecision,
    backdropBackgroundColour: this.colorback
  };
  // fin loader config

  // variables
  clientesTraiga$: any;
  private searchTerms$ = new Subject<string>();

  public loading = false;
  public clientes: any;

  constructor(
    private Com: ComunicacionService,
    private flash: NgFlashMessageService,
    private router: Router
  ) {}

  // mete un termino de busqueda en el arreglo de observables
  search(term: string): void {
    this.searchTerms$.next(term);
  }
  ngOnInit() {

    this.clientesTraiga$ = this.searchTerms$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.Com.BuscarClientes(term))
    );
  }


  mostrarUsuario(user) {
    Swal.fire(
      {
        title:  `Mostrando Usuario` ,
        type: 'info',
        width: 1000,
        html: user,
        focusConfirm: false,
        confirmButtonText:
          ' OK!',
      }
    );
  }

  salirsesion() {
    this.Com.logout();
  }

  peticionClients() {
    this.loading = true;
    this.Com.ObtenerClientes().subscribe((data: Response) => {
      console.log(data);
      
      if (data.success) {
        this.loading = false;
        this.flash.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: 4000,
          type: "success"
        });
        this.clientes = data.clientes;
      } else {
        this.loading = false;
        this.flash.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: false,
          type: "danger"
        });
      }
    });
  }

  eliminar(item) {
    this.clientes = this.clientes.filter(h => h !== item);
  }
}
