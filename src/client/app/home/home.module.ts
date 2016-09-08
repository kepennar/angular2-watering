import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlantActions } from '../store/actions/index';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PlantsListComponent } from './plants-list/index';
import { TableComponent } from './plants-list/index';
import { PlantFormComponent } from './plant-form/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HomeComponent, PlantsListComponent, TableComponent, PlantFormComponent],
  exports: [HomeComponent],
  providers: [PlantActions]
})
export class HomeModule { }
