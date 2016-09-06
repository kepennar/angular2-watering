import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { v4 } from 'node-uuid';

import { AppState, Plant } from '../../store/reducers/index';
import { PlantActions } from '../../store/actions/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-plant-form',
  template: `
    <form (submit)="addPlant()">
      <fieldset>
        <legend>Add your plant</legend>
        <label>
          Name:
          <input [(ngModel)]="newPlant" name="newPlant" placeholder="Your plant name">
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
  newPlant: string = '';
  watterFrequency: number = 10;

  constructor(
    private store: Store<AppState>,
    private plantActions: PlantActions
  ) {
  }
  addPlant(): boolean {
    const newPlant: Plant = {
      id: v4(),
      name: this.newPlant,
      watterFrequency: this.watterFrequency
    };
    this.store.dispatch(this.plantActions.add(newPlant));
    this.newPlant = '';
    return false;
  }

}
