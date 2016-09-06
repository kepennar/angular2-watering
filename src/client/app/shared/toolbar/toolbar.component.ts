declare var Granim: any;

import { Component, AfterViewInit } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-toolbar',
  template: `
    <canvas id="granim-canvas"></canvas>
    <h1>Plants Watering</h1>
  `,
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent implements AfterViewInit {
  gramin: any;

  ngAfterViewInit() {
    this.gramin = new Granim({
      element: '#granim-canvas',
      name: 'basic-gradient',
      direction: 'left-right',
      opacity: [1, .5, .1],
      isPausedWhenNotInView: true,
      states : {
        'default-state': {
          gradients: [
            ['#485563', '#6db33f', '#29323c'],
            ['#00c6ff', '#106cc8', '#106cc8'] //#6db33f
          ]
        }
      }
    });
  }
}

