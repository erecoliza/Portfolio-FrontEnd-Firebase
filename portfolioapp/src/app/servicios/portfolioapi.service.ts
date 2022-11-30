import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Persona } from "./model/persona.model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioapiService {
  
  URL = 'localhost:8080/ver/personas'
  constructor(private http: HttpClient) { }

  obtenerDatos():Observable<any>{

     return this.http.get(this.URL);    
    
  }

  /*public getpersona(): Observable<any>{
    return this.http.get(this.URL + "ver/personas");
  }*/

}
