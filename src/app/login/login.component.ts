import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { ComunicacionService } from "../servicios/comunicacion.service";
import { NgFlashMessageService } from "ng-flash-messages";
import { Router } from "@angular/router";
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from "ngx-loading";
import { FormControl } from "@angular/forms";
import Swal from "sweetalert2";
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();
interface Data {
  success: boolean;
  msg: string;
  user: any;
  token: string;
  admin: string;
}

declare const $: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
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
  // LOADER BOOLEANO
  public loading = false;

  // DATOS INPUT
  Email: string;
  Password: string;
  recordarD: boolean;
  values = "";
  expirationDate: any;
  isExpired: boolean;

  onKey(event: KeyboardEvent) {
    // without type info
    this.values += (<HTMLInputElement>event.target).value + " | ";
  }

  binario() {
    alert(this.recordarD);
  }

  // model usuario

  constructor(
    private Com: ComunicacionService,
    private flash: NgFlashMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    $(".wrapper").mousemove(e => {
      console.log("muevete mouse");
      const moveX = (e.pageX * -1) / 120;
      const moveY = (e.pageX * -1) / 120;
      $(".wrapper").css("background-position", moveX + "px " + moveY + "px ");
    });
  }

  go() {
    this.loading = true;
    const user = {
      Email: this.Email,
      Password: this.Password
    };

    this.Com.Login(user).subscribe((data: Data) => {
      if (data.success) {
        console.log(JSON.stringify(data));
        this.loading = false;
        // mirar que fecha el token se vence
        this.expirationDate = helper.getTokenExpirationDate(data.token);
        this.isExpired = helper.isTokenExpired(data.token);
        this.flash.showFlashMessage({
          messages: [
            "Expiracion = " +
              this.expirationDate +
              " booleano => " +
              this.isExpired
          ],
          dismissible: true,
          timeout: false,
          type: "success"
        });
        this.Com.storeUserData(data.token, data.user);
        if (data.admin) {
          // begin swal
          Swal.fire({
            title: data.msg,
            animation: false,
            type: "success",
            customClass: "animated tada",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ingresa a tu cuenta admin!"
          }).then(result => {
            if (result.value) {
              this.router.navigate(["/admin"]);
            }
          });
          // fIN SWAL
        } else {
          // begin swal
          Swal.fire({
            title: "Ingreso Autorizado Bienvenido ",
            animation: false,
            type: "success",
            customClass: "animated tada",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ingresa al Dashboard!"
          }).then(result => {
            if (result.value) {
              this.router.navigate(["/dashboard"]);
            }
          });
          // fIN SWAL
        }

        /*  this.flash.showFlashMessage({
          messages: [data.msg],
          dismissible: true,
          timeout: false,
          type: "success"
        }); */
      }

      if (!data.success) {
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
}
