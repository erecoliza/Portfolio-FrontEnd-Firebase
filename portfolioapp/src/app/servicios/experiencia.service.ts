import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = "http://localhost:8080/experiencia"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<experiencia[]> {
    return this.httpClient.get<experiencia[]>(this.URL+`/list`);    
  }

  public detail(id: number): Observable<experiencia> {
    return this.httpClient.get<experiencia>(this.URL+`update/experiencia/${id}`);
  }

  public save(experiencia: experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL+`new/experiencia`, experiencia);
  }

  public update(id: number, experiencia: experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/experiencia/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/experiencia/${id}`);
  }

}
