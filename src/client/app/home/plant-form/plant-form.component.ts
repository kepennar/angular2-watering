import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 } from 'node-uuid';

import { Plant } from '../../model/Plant';
import { AppState} from '../../store/reducers/index';
import { PlantActions } from '../../store/actions/index';

@Component({
  moduleId: module.id,
  selector: 'sd-plant-form',
  template: `
    <form (submit)="addPlant(newPlant)">
      <fieldset>
        <legend>Add your plant</legend>
        <label>
          Name:
          <input #newPlant [(ngModel)]="newPlant" name="newPlant" placeholder="Your plant name">
        </label>
        <label>
          Watering frequency (per week):
          <select [(ngModel)]="watterFrequency" name="watterFrequency" >
            <option *ngFor="let freq of watterFrequencies" [value]="freq">{{freq}}</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </fieldset>
    </form>
  `,
  styleUrls: ['./plant-form.component.css']
})
export class PlantFormComponent {
  watterFrequencies = [1, 2, 5, 10, 20];
  watterFrequency: number = 10;

  constructor(
    private store: Store<AppState>,
    private plantActions: PlantActions
  ) {
  }
  addPlant(newPlant: string): boolean {
    const plantToCreate: Plant = {
      id: v4(),
      name: newPlant,
      watterFrequency: this.watterFrequency
    };
    this.store.dispatch(this.plantActions.add(plantToCreate));
    return false;
  }

}
