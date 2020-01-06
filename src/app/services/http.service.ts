import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

/**
 * Http Request (ajax) Service
 */

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  /**
   * Create an Instance of HttpService
   * @param {HttpClient} httpClient
   * @memberOf HttpService
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * Send Request to Path
   *
   * @param {string} path
   * @return Observable with result of request
   *
   */
  loadData<T>(path: string): Observable<T> {
    const url = environment.host + path;
    return  this.httpClient.get<T>(url);
  }
}
