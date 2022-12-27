import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = "http://localhost:8080/persona"

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<persona> {
    return this.httpClient.get<persona>(this.URL+"/detail/1")    
  }

  public update(id: number, proyecto: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, proyecto);
  }
  
}
