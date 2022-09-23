import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Persona } from "./model/persona.model";

@Injectable({
  providedIn: 'root'
})
export class PortfolioapiService {
  URL = 'http://localhost:8080/personas'
  constructor(private http: HttpClient) { }

  //public getpersona(): Observable<persona>{
  //  return this.http.get<persona>(this.URL + "traer/perfil");
  //}

}
