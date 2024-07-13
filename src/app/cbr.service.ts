import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CbrService {
  private apiUrl = 'https://www.cbr-xml-daily.ru/latest.js';

  constructor(private http: HttpClient) { }

  getRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
