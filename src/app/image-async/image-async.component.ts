import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

/**
 * Show an animation until you load the image
 * @example
 * <image-async [url]="urlImage"></image-async>
 */

@Component({
  selector: 'image-async', // tslint:disable-line
  templateUrl: './image-async.component.html',
  styleUrls: ['./image-async.component.scss'],
  animations: [
    trigger('imageAnimation', [
      state('show-image', style({
        opacity: '1',
      })),
      state('hide-image', style({
        opacity: '0'
      })),
      transition('show-image <=> hide-image', animate('1000ms ease-in')),
    ])
  ]
})

export class ImageAsyncComponent implements OnInit {
  /**
   * State of imageAnimation for image
   */
  imageCtrl: string = 'hide-image';

  /**
   * State of imageAnimation for <ng-content></ng-content>
   */
  contentCtrl: string = 'show-image';

  /**
   * Url of image to load
   * @type {string}
   * @memberOf ImageAsyncComponent
   */

  @Input('url') set url(url: string) {
    if (url) {
      this.loadImage(url);
    }
  }

  /**
   * Reference to Element Html with id lImage
   */
  @ViewChild('lImage') lImage: ElementRef;

  constructor() { }

  ngOnInit() {
    /**
     * Assigned Function to lImage the event "onLoad" changes state of imageAnimation
     */
    this.lImage.nativeElement.onload = () => {
      this.imageCtrl = 'show-image';
      this.contentCtrl = 'hide-image';
    };
  }

  /**
   * Show animation and load Image
   * @param urlImage
   */

  loadImage(urlImage) {
    this.imageCtrl = 'hide-image';
    this.contentCtrl = 'show-image';
    this.lImage.nativeElement.src = urlImage;
  }
}
