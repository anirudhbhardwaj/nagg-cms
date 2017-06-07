import { Component, OnInit } from '@angular/core';
import {GridsterConfig} from "angular-gridster2/dist/index";
import {GridsterResizeEventType} from "angular-gridster2/dist/gridsterResizeEventType.interface";
import {GridsterConfigService} from "angular-gridster2/dist/gridsterConfig.constant";
import {GridsterItem} from "angular-gridster2/dist/gridsterItem.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: GridsterItem[];

  static eventStop(item, scope) {
    console.info('eventStop', item, scope);
  }

  static itemChange(item, scope) {
    console.info('itemChanged', item, scope);
  }

  static itemResize(item, scope) {
    console.info('itemResized', item, scope);
  }

  static itemInit(item) {
    console.info('itemInitialized', item);
  }

  ngOnInit() {
    this.options = GridsterConfigService;
    this.options.draggable = true;

    this.dashboard = [
      {cols: 2, rows: 1, y: 1, x: 0},
      {cols: 2, rows: 4, y: 2, x: 2},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 1, rows: 1, y: 3, x: 4},
      {cols: 3, rows: 1, y: 3, x: 4}
    ];
  }

  changedOptions() {
    this.options.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  };

  addItem() {
    this.dashboard.push({});
  };
}
