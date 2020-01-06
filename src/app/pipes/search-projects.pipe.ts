import { Pipe, PipeTransform } from '@angular/core';
import {Project} from '../interfaces/project';

/**
 * Filter Projects for name
 * @example
 * <div *ngFor="let p of projects | searchProjects : search">
 */
@Pipe({
  name: 'searchProjects'
})
export class SearchProjectsPipe implements PipeTransform {

  /**
   * Filter Projects if name if equal to search
   * @param values
   * @param search
   *
   * @return Proyect array
   */
  transform(values: Array<Project>, search: string): Array<Project> {
      return values.filter((project: Project) => {
        return project.name.toLowerCase().search(search) !== -1;
      });
  }

}
