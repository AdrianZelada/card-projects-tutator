import {Component, Input} from '@angular/core';
import {Project} from '../interfaces/project';

/**
 * Show Information of Project
 * @example
 * <card-project [project]="item"></card-project>
 *
 */
@Component({
  selector: 'card-project', // tslint:disable-line: component-selector
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {
  /**
   * Project data
   *
   * @type {Project}
   * @memberOf CardProjectComponent
   */
  @Input() private project: Project;
}
