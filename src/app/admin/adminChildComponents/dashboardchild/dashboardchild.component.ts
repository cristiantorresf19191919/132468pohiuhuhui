import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { NgFlashMessageService } from "ng-flash-messages";
import { Router } from "@angular/router";
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from "ngx-loading";
import { animations } from "ack-angular-fx";
import { Observable, of, Subject } from "rxjs";
import Swal from "sweetalert2";
import { MenuItem } from "primeng/api";
import { Usuario } from "src/app/models/usuario.model";
import { ComunicacionService } from "src/app/servicios/comunicacion.service";

interface Clientes {
  correo;
  cedula;
  celular;
  clientes: any;
}

interface Response {
  success: boolean;
  msg: string;
  clientes: any;
}

@Component({
  selector: "app-dashboardchild",
  templateUrl: "./dashboardchild.component.html",
  styleUrls: ["./dashboardchild.component.scss"]
})
export class DashboardchildComponent implements OnInit {
  private items: MenuItem[];

  cars: any;
  // toda la data de los clientes
  clientes: any;
  paginator: boolean;
  first = 0;
  filas: number;

  reset() {
    this.first = this.first + 1;
    if (this.first % 2 === 0) {
      this.paginator = false;
    } else {
      this.paginator = true;
    }
  }

  brands: any;

  colors: any;

  cols: any;

  yearFilter: number;

  yearTimeout: any;

  @ViewChild("ngxLoading") ngxLoadingComponent: NgxLoadingComponent;
  @ViewChild("customLoadingTemplate") customLoadingTemplate: TemplateRef<any>;
  @ViewChild("searchBox") searchBox;
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
  public loading = false;

  withRefresh = false;
  packages$: Observable<Usuario[]>;
  private searchText$ = new Subject<string>();

  buscaAsyncA(evento: string) {
    console.log(evento);
    this.searchText$.next(evento);
  }
  constructor(
    private Com: ComunicacionService,
    private flash: NgFlashMessageService,
    private router: Router
  ) {}
  ngOnInit() {
    this.Com.ObtenerClientes().subscribe((data: Response) => {
      this.clientes = data.clientes;
      console.log(data);
    });

    this.cols = [
      { field: "nombre", header: "Nombre" },
      { field: "correo", header: "Correo" },
      { field: "cedula", header: "Cedula" },
      { field: "celular", header: "Celular" },
      { field: "date", header: "Fecha" }
    ];
  }

  onYearChange(event, dt) {
    if (this.yearTimeout) {
      clearTimeout(this.yearTimeout);
    }

    this.yearTimeout = setTimeout(() => {
      dt.filter(event.value, "year", "gt");
    }, 250);
  }

  salirsesion() {
    this.Com.logout();
  }
  peticionClients() {
    this.loading = true;
    this.Com.ObtenerClientes().subscribe((data: Response) => {
      if (data.success) {
        this.loading = false;
        this.flash.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: false,
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
