import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

/**
 * Data die wordt weergegeven in het inventory model
 */
export interface ProductData {
  name: string;
  location: string;
  status: string;
  status_class: string;
}

const TEST_DATA: ProductData[] = [
  {name: 'CANON R5', location: 'Somewhere', status: 'INVENTORY.AWAITS_APPROVAL', status_class: 'awaits-approval-status'},
  {name: 'CANON R5', location: 'Die ene plank', status: 'INVENTORY.RESERVED', status_class: 'reserved-status'},
  {name: 'CANON R5', location: 'Somewhere', status: 'INVENTORY.AVAILABLE', status_class: 'available-status'},
  {name: 'CANON R5', location: 'Somewhere', status: 'INVENTORY.UNAVAILABLE', status_class: 'unavailable-status'},
];

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
    displayedColumns: string[] = ['name', 'location', 'status'];
    dataSource = TEST_DATA;

  constructor(private breakpointObserver: BreakpointObserver) {}
}
