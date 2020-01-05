import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../interfaces/project';

@Component({
  selector: 'list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  @Input() projects: Array<Project>;
  search: string = '';
  constructor() { }

  ngOnInit() {
  }

}
