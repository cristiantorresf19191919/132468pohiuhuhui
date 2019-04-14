import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError,map,tap} from 'rxjs/operators';
import {Observable,of} from 'rxjs';
import {MensajeriaService} from './mensajeria.service';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
    })
}
@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private url = 'https://servidor-tigre.herokuapp.com'; 
  constructor(
    private httpClient:HttpClient
    ){
   }
   private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error('hubo algun desafortunado error :( '+error); // log to console instead
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} ha fallado por aca: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  } 
   EnviarVideo(obj){
     return this.httpClient.post(this.url+'/ideas/add',obj,httpOptions)
     .pipe(       
       catchError(this.handleError('Enviar Video'))
       );  
   }
   ObtenerDatos(){
     return this.httpClient.get(this.url+'/ideas')
     .pipe(
       catchError(this.handleError('Obtener Datos'))
     );
   } 
   OperacionConId(id){
     return this.httpClient.get(`${this.url}/ideas/edit/${id}`)
     .pipe(
       catchError(this.handleError('operacion con Id'))
     ); 
   } 
   
   UpdateVideo(video,id){
     return this.httpClient.put(`${this.url}/ideas/${id}`,video,httpOptions)
     .pipe(
       catchError(this.handleError('UpdateVideo'))
     );
   }

   Borrar(id){
     
     return this.httpClient.delete(`${this.url}/ideas/borrar/${id}`,httpOptions)
     .pipe(
       catchError(this.handleError('Borrar'))
     );
   }

   Registro(user){
     return this.httpClient.post(`${this.url}/users/register`,user,httpOptions)
     .pipe(
       catchError(this.handleError('registro'))
     );
   }

   Login(user){
     return this.httpClient.post(`${this.url}/users/login`,user,httpOptions)
     .pipe(
       catchError(this.handleError('login'))
     );
   }
  }
