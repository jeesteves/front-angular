import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  private apiUrl = 'http://localhost:3000/exemplo';

  constructor(
    private http: HttpClient
  ) { }

  getExemplo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
