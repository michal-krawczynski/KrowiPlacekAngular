import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  api_url: string = "http://localhost:8000/api/";

  constructor(private http: HttpClient) {
  }

  get(url: string, params?: any): Observable<any> {
    return this.http.get<any>(this.api_url + url, params)
  }

  post(url: string): Observable<any> {
    return this.http.post<any>(this.api_url + url, JSON.stringify({}))
  }
}

