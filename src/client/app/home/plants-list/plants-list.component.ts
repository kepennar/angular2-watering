import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import {
  TableOptions,
  TableColumn,
  ColumnMode,
} from 'angular2-data-table';
import { Plant } from '../../model/Plant';
import { AppState } from '../../store/reducers/index';
import { PlantActions } from '../../store/actions/index';

@Component({
  moduleId: module.id,
  selector: 'sd-plants-list',
  template: `
    <datatable
      class='material striped'
      [rows]='plants | async'
      [options]='options'>
      <datatable-column name="">
        <template let-row="row" let-value="value">
          <button (click)="watering($event, value)" style="float: right">Water</button>
        </template>
      </datatable-column>
    </datatable>
  `
})
export class PlantsListComponent {

  options = new TableOptions({
    columnMode: ColumnMode.force,
    headerHeight: 50,
    footerHeight: 50,
    rowHeight: 'auto',
    columns: [
      new TableColumn({ name: 'Name', prop: 'name' }),
      new TableColumn({ name: 'Frequency (per week)', prop: 'watterFrequency' }),
      new TableColumn({ name: 'Last water', prop: 'last' }),
    ]
  });

  plants: Observable<Plant[]>;

  constructor(
    private store: Store<AppState>,
    private plantActions: PlantActions
    ) {
    this.plants = store.select('plants');
  }

  watering(event: Event, value: Plant) {
    event.preventDefault();
    this.store.dispatch(this.plantActions.watering(value.id));
    return false;
  }
}
