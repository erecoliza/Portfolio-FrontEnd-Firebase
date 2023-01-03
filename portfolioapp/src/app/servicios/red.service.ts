import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { red } from '../model/red.model';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  URL = "https://erecoliza-portfolio.onrender.com/red";
  //URL = "http://localhost:8080/red"

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<red[]> {
    return this.httpClient.get<red[]>(this.URL+`/list`);    
  }

  public detail(id: number): Observable<red> {
    return this.httpClient.get<red>(this.URL+`/detail/${id}`);
  }

  public save(red: red): Observable<any>{
    return this.httpClient.post<any>(this.URL+`/new`, red);
  }

  public update(id: number, red: red): Observable<any>{
    return this.httpClient.put<any>(this.URL + `/update/${id}`, red);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
