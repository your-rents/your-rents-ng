import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CityService } from '../../../../shared/service/geodata/city.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { City } from '../../../../shared/model/geodata/city';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { TranslocoDirective } from '@jsverse/transloco';
import { TranslocoPaginatorIntl } from '../../../../shared/service/common/transloco-paginator-intl';

@Component({
  selector: 'app-city-list',
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule, TranslocoDirective],
  providers: [{ provide: MatPaginatorIntl, useClass: TranslocoPaginatorIntl }],
  templateUrl: './city-list.component.html',
  styleUrl: './city-list.component.css',
})
export default class CityListComponent implements AfterViewInit {
  displayedColumns: string[] = ['uuid', 'name', 'localData.itCodiceIstat', 'localData.itCodiceErariale', 'province.name'];
  data: City[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  
  @ViewChildren(MatPaginator) paginator!: QueryList<MatPaginator>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cityService: CityService) {}

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator.forEach(p => p.pageIndex = 0)));

    this.paginator.get(0)!.page.subscribe(() => {
      this.paginator.get(1)!.pageIndex = this.paginator.get(0)!.pageIndex;
    })

    this.paginator.get(1)!.page.subscribe(() => {
      this.paginator.get(0)!.pageIndex = this.paginator.get(1)!.pageIndex;
    })

    merge(this.sort.sortChange, ...this.paginator.map(p => p.page))
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.cityService.getCities(
            this.sort.active,
            this.sort.direction,
            this.paginator.get(0)!.pageIndex,
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          this.isLoadingResults = false;

          if (data === null) {
            return [];
          }

          this.resultsLength = data.totalElements;
          return data.content;
        }),
      )
      .subscribe(data => (this.data = data));    
  }
}
