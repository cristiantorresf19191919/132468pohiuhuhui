import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { ComunicacionService } from "./comunicacion.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuardUser implements CanActivate {
  constructor(
    private ComunicacionService: ComunicacionService,
    private Router: Router
  ) {}

  // canActivate():boolean{
  //   if (!this.ComunicacionService.isAuthenticated()){
  //     this.Router.navigate(['login']);
  //     return false;
  //   } else if (this.ComunicacionService.isAuthenticated()){
  //     return true;
  //   }
  // }

  canActivate() {
    if (this.ComunicacionService.user.rol === "ADMIN_ROLE") {
      return true;
    } else {
      console.log("Bloqueado por el ADMIN GUARD");
      this.ComunicacionService.logout();

      return false;
    }
  }
}
