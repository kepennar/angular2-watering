import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { ColumnConfig } from './table.component';
import { Plant } from '../../model/Plant';
import { AppState } from '../../store/reducers/index';
import { PlantActions } from '../../store/actions/index';

@Component({
  moduleId: module.id,
  selector: 'sd-plants-list',
  template: `
    <sd-table [config]="tableConfig" [datas]="plants | async"></sd-table>
  `
})
export class PlantsListComponent {

  tableConfig: ColumnConfig[] = [
    {key: 'name', label: 'Name' },
    {key: 'watterFrequency', label: 'Frequency (per week)' },
    {key: 'last', label: 'Last water' },
    {
      key: 'action',
      label: 'Water',
      isButton: true,
      onClick: ($e, value) => this.watering($e, value)
    },
  ];

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
