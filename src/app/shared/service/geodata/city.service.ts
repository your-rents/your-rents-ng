import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../../model/geodata/city';
import { Page } from '../../model/common/page';
import { Observable } from 'rxjs';
import {SortDirection} from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(sort: string, order: SortDirection, page: number): Observable<Page<City>> {
    const href = 'http://localhost:8080/api/v1/yourrents/geodata/cities';
    const requestUrl = `${href}?sort=${sort},${order}&page=${page + 1}`;

    return this.http.get<Page<City>>(requestUrl, {});
  }
}
