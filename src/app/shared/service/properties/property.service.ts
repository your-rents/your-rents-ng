import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Page } from '../../model/common/page';
import { Property } from '../../model/properties/property';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

 constructor(private http: HttpClient) { }

  getProperties(sort: string, order: SortDirection, page: number): Observable<Page<Property>> {
    const requestUrl = `${environment.apiUrl}/properties?sort=${sort},${order}&page=${page + 1}`;

    return this.http.get<Page<Property>>(requestUrl, {});
  }
}
