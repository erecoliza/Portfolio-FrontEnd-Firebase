import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proyecto } from '../model/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  URL = "http://localhost:8080/proyecto"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<proyecto[]> {
    return this.httpClient.get<proyecto[]>(this.URL+`/list`);    
  }

  public detail(id: number): Observable<proyecto> {
    return this.httpClient.get<proyecto>(this.URL+`/update/${id}`);
  }

  public save(proyecto: proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URL+`/new`, proyecto);
  }

  public update(id: number, proyecto: proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    console.log("tratando de borrar", id);
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }

}
