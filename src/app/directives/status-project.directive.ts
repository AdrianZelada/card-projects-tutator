import {AfterContentInit, Directive, ElementRef, Input, OnInit} from '@angular/core';
import {stateProject} from '../interfaces/project';

@Directive({
  selector: '[statusProject]'
})
export class StatusProjectDirective implements AfterContentInit {

  @Input() state: stateProject;
  constructor(private el: ElementRef) { }

  ngAfterContentInit() {
    if (this.state === 'Finish') {
      this.el.nativeElement.style.background = '#d0f4b9';
    }
  }

}
