import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';
import {projectProgress} from '../interfaces/project';

/**
 * Change the background-color of element if state is equal to "Finish"
 * @example
 * <div statusProject [state]="state"></div>
 *
 */

@Directive({
  selector: '[statusProject]' // tslint:disable-line
})
export class StatusProjectDirective implements AfterContentInit {

  /**
   * state of project ( "Finish" or "Working")
   *
   * @type {projectProgress}
   * @memberOf StatusProjectDirective
   */
  @Input() progress: projectProgress;

  /**
   * Creates an instance StatusProjectDirective
   * @param {ElementRef} el
   */
  constructor(private el: ElementRef) { }

  /**
   * Change the background-color of element if state is equal to "Finish"
   */
  ngAfterContentInit() {
    if (this.progress === 'Finish') {
      this.el.nativeElement.style.background = '#d0f4b9';
    }
  }

}
