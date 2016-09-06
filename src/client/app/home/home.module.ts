import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2DataTableModule } from 'angular2-data-table';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PlantsListComponent } from './plants-list/index';
import { PlantFormComponent } from './plant-form/index';

@NgModule({
  imports: [Angular2DataTableModule, CommonModule, SharedModule],
  declarations: [HomeComponent, PlantsListComponent, PlantFormComponent],
  exports: [HomeComponent],
})
export class HomeModule { }
