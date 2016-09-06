import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {
  TableOptions,
  TableColumn,
  ColumnMode,
  SelectionType
} from 'angular2-data-table';

import { AppState, Plant } from '../../store/reducers/index';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-plants-list',
  template: `
    <datatable
      class='material striped'
      [rows]='plants | async'
      [selected]='selection'
      (onSelectionChange)='onSelectionChange($event)'
      [options]='options'>
    </datatable>
  `,
})
export class PlantsListComponent {
   options = new TableOptions({
    columnMode: ColumnMode.force,
    selectionType: SelectionType.single,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto',
    columns: [
      new TableColumn({ name: 'Name', prop: 'name' }),
      new TableColumn({ name: 'Frequency', prop: 'watterFrequency' })
    ]
  });
  selection;

  plants: Observable<Plant[]>;

  constructor(public store: Store<AppState>) {
    this.plants = store.select('plants');
  }

  onSelectionChange(selected) {
    console.log('Selection!', selected);
  }
}
