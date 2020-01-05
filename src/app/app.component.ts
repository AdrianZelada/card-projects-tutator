import { Component } from '@angular/core';
import {HttpService} from './services/http.service';
import {defaultUser, User} from './interfaces/user';
import {Observable} from 'rxjs';
import {startWith} from 'rxjs/operators';
import {Project} from './interfaces/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user$: Observable<User> = new Observable<User>();
  projects$: Observable<Array<Project>> = new Observable<Array<Project>>();
  constructor(private httpService: HttpService) {
    this.user$ = this.httpService.loadData<User>('users').pipe(startWith(defaultUser));
    this.projects$ = this.httpService.loadData<Array<Project>>('kaikaia').pipe(startWith([]));
  }
}
