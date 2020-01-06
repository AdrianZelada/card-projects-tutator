import { Component } from '@angular/core';
import {HttpService} from './services/http.service';
import {defaultUser, User} from './interfaces/user';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {Project} from './interfaces/project';

/**
 * Root Component
 * @example
 * <app-root></app-root>
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * Observable of Load user data
   *
   * @type {Observable<User>}
   * @memberOf AppComponent
   */
  user$: Observable<User> = new Observable<User>();
  /**
   * Observable of Load Projects data
   *
   * @type {Observable<Array<Project>}
   * @memberOf AppComponent
   */
  projects$: Observable<Array<Project>> = new Observable<Array<Project>>();

  /**
   * create instance of AppComponent
   * @param {HttpService} httpService
   */
  constructor(private httpService: HttpService) {
    this.user$ = this.httpService.loadData<User>('users').pipe(startWith(defaultUser));
    this.projects$ = this.httpService.loadData<Array<Project>>('kaikaia').pipe(startWith([]));
  }
}
