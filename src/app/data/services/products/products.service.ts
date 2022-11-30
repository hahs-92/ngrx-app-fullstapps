import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IKpi } from '../../../core/models/products.model';

export interface Attributes {
  title: string;
  value: number;
  percentage: number;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface Datum {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Response {
  data: Datum[];
  meta: Meta;
}
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private _http: HttpClient) {}

  getKpis(): Observable<IKpi[]> {
    return this._http.get<IKpi[]>('/kpis');
    // .pipe(
    //   map((response: any) => {
    //     console.log('resp: ', response);
    //     const { data } = response;
    //     const values = data.map((value: any) => {
    //       return { id: value.id, ...value.attributes };
    //     });
    //     return values;
    //   })
    // );
  }
}
