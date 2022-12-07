import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../model/Habilidad.model';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = "http://localhost:8080/habilidad"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<habilidad[]> {
    return this.httpClient.get<habilidad[]>(this.URL+`/ver/habilidades`);    
  }

  public detail(id: number): Observable<habilidad> {
    return this.httpClient.get<habilidad>(this.URL+`update/habilidad/${id}`);
  }

  public save(habilidad: habilidad): Observable<any>{
    return this.httpClient.post<any>(this.URL+`new/habilidad`, habilidad);
  }

  public update(id: number, habilidad: habilidad): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/habilidad/${id}`, habilidad);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/habilidad/${id}`);
  }

}
