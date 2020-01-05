import { Pipe, PipeTransform } from '@angular/core';
import {Project} from '../interfaces/project';

@Pipe({
  name: 'searchProjects'
})
export class SearchProjectsPipe implements PipeTransform {

  transform(value: Array<Project>, args?: any): any {
      return value.filter((project: Project) => {
        return project.title.toLowerCase().search(args) !== -1;
      });
  }

}
