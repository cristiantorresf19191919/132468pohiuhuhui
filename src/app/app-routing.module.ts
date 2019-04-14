import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {IdeasaddComponent} from './ideasadd/ideasadd.component';
import {IdeasComponent} from './ideas/ideas.component';
import {EditVideoComponent} from './edit-video/edit-video.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
{path:'Login',component:LoginComponent},
{path:'Registro',component:RegistrationComponent},
{path:'EditVideo/:id',component:EditVideoComponent},  
{path:"IdeasDone", component:IdeasComponent},
{path:"Home", component:HomeComponent},
{path:"About", component:AboutComponent},
{path:"Ideas",component:IdeasaddComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
