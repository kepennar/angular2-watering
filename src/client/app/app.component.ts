import { Component } from '@angular/core';
import { Config} from './shared/index';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  template: `
    <sd-toolbar></sd-toolbar>
    <sd-navbar></sd-navbar>
    <div class="view-container">
      <router-outlet></router-outlet>
    </div>
   `,
})

export class AppComponent {
  constructor() {
    console.log('Environment config', Config);
  }
}
