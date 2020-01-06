import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';


/**
 * Show Information of User
 * @example
 * <user-card [user]="item"></user-card>
 *
 */

@Component({
  selector: 'user-card', // tslint:disable-line: component-selector
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent{
  /**
   * User data
   *
   * @type {User}
   * @memberOf UserCardComponent
   */
  @Input() user: User;
}
