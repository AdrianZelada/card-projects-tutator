import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  loadData<T>(path: string): Observable<T> {
    const url = environment.host + path;
    return  this.httpClient.get<T>(url);
  }
}
