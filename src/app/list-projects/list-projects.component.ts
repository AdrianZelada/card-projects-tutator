import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../interfaces/project';

/**
 * Project List
 * @example
 * <list-projects [projects]="projects"></list-projects>
 */

@Component({
  selector: 'list-projects', // tslint:disable-line
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  /**
   * Projects List
   * @type {Array<Project>}
   * @memberOf ListProjectsComponent
   */
  @Input() projects: Array<Project>;

  /**
   * search model
   * @type {string}
   * @memberOf ListProjectsComponent
   */
  search: string = '';
  constructor() { }

  ngOnInit() {
  }

}
