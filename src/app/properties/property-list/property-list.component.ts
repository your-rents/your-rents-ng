import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Property } from '../../shared/model/properties/property';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { PropertyService } from '../../shared/service/properties/property.service';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-property-list',
  imports: [MatPaginatorModule, MatSortModule, MatTableModule, RouterLink],
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
})
export class PropertyListComponent {
  data: Property[] = [];

  resultsLength = 0;
  isLoadingResults = true;

  //    @ViewChildren(MatPaginator) paginator!: QueryList<MatPaginator>;
  //@ViewChild(MatSort) sort!: MatSort;

  constructor(private propertyService: PropertyService) { }

  ngAfterViewInit(): void {
    // this.sort.sortChange.subscribe(() => (this.paginator.forEach(p => p.pageIndex = 0)));

    // this.paginator.get(0)!.page.subscribe(() => {
    //   this.paginator.get(1)!.pageIndex = this.paginator.get(0)!.pageIndex;
    // })

    // this.paginator.get(1)!.page.subscribe(() => {
    //   this.paginator.get(0)!.pageIndex = this.paginator.get(1)!.pageIndex;
    // })

    //merge(this.sort.sortChange, ...this.paginator.map(p => p.page))
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.propertyService.getProperties(
            //this.sort.active,
            "name",
            //this.sort.direction,
            "",
            //this.paginator.get(0)!.pageIndex,
            0
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          this.isLoadingResults = false;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.page.totalElements;
          return data.content;
        }),
      )
      .subscribe(data => (this.data = data));
  }

}
