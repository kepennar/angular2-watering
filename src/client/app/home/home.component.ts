import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  template: `
    <h3>
      Howdy! Here's a list of your plants.
    </h3>
    <sd-plants-list></sd-plants-list>
    <sd-plant-form></sd-plant-form>
  `,
  styleUrls: ['home.component.css'],
})
export class HomeComponent {}
