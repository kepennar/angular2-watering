import { Component, Input } from '@angular/core';

export interface ColumnConfig {
  key: string;
  label: string;
  isButton?: boolean;
  onClick?: Function;
}

@Component({
  moduleId: module.id,
  selector: 'sd-table',
  template: `
    <table>
      <tr>
        <th *ngFor="let column of config">
          {{column.label}}
        </th>
      </tr>
      <tr *ngFor="let data of datas">
        <td *ngFor="let column of config" >
          <span *ngIf="!column.isButton"> {{data[column.key]}}</span>
          <button *ngIf="column.isButton" (click)="column.onClick($event, data)">{{column.label}}</button>
        </td>
      </tr>
    </table>
  `,
  styleUrls: ['./table.css']
})
export class TableComponent {
  @Input() config: ColumnConfig[];
  @Input() datas: any;
}
