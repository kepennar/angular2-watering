import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState, Plant, ADD_PLANT } from '../../store/reducers/index';
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
          Watering frequency:
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

  constructor(public store: Store<AppState>) {
  }
  addPlant(): boolean {
    const newPlant: Plant = {
      name: this.newPlant,
      watterFrequency: this.watterFrequency
    };
    this.store.dispatch({ type: ADD_PLANT, payload: newPlant });
    this.newPlant = '';
    return false;
  }

}
