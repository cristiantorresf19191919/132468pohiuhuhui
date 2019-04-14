import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { IdeasaddComponent } from './ideasadd/ideasadd.component';
import {HttpClientModule} from '@angular/common/http';
import { MensajesComponent } from './mensajes/mensajes.component';
import { IdeasComponent } from './ideas/ideas.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { NgFlashMessagesModule } from 'ng-flash-messages';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    IdeasaddComponent,
    MensajesComponent,
    IdeasComponent,
    EditVideoComponent,
    RegistrationComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
