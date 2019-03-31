import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PasswordModule } from "primeng/password";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuard } from "./servicios/auth.guard";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full", data: { state: "home" } },
  { path: "header", component: HeaderComponent },
  { path: "home", component: HomeComponent },
  { path: "registro", component: RegistroComponent, data: { state: "about" } },
  { path: "login", component: LoginComponent, data: { state: "login" } },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "admin",
    loadChildren: "./admin/admin-module.module#AdminModuleModule"

  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    PasswordModule
  ]
})
export class AppRoutingModule {}
