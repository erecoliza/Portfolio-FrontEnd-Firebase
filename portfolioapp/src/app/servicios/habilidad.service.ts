import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../model/habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = "https://erecoliza-portfolio.onrender.com/habilidad";
  //URL = "http://localhost:8080/habilidad"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<habilidad[]> {
    return this.httpClient.get<habilidad[]>(this.URL+`/list`);    
  }

  public detail(id: number): Observable<habilidad> {
    return this.httpClient.get<habilidad>(this.URL+`/update/${id}`);
  }

  public save(habilidad: habilidad): Observable<any>{
    return this.httpClient.post<any>(this.URL+`/new`, habilidad);
  }

  public update(id: number, habilidad: habilidad): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    console.log("tratando de borrar", id);
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }

}
