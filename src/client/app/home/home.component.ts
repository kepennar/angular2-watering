import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  TableOptions,
  TableColumn,
  ColumnMode,
  SelectionType
} from 'angular2-data-table';

import { AppState, Plant, ADD_PLANT } from '../store/reducers/index';
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
