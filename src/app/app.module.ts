import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { httpInterceptorProviders } from "./http-interceptors";
import { FooterComponent } from "./footer/footer.component";
import { FontTagDirective } from "./directivas/font-tag.directive";
import { ScrollaaDirective } from "./directivas/scrollaa.directive";
import { ModuleadmincomponentModule } from "./shared/moduleadmincomponent.module";
import { NgxLoadingModule } from "ngx-loading";
import { NgFlashMessagesModule } from "ng-flash-messages";
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    FooterComponent,
    FontTagDirective,
    ScrollaaDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModuleadmincomponentModule,
    NgxLoadingModule.forRoot({}),
    NgFlashMessagesModule,
    NgwWowModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
