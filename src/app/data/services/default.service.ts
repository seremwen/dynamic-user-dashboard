import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, empty, map } from 'rxjs';
import { PAGEPARAMS, PageRequest, PageResult } from '../models';


export class DefaultService<T> {
  public getAll(): Observable<T[]> {
    const url = `/all`;
    return this.getFromUrl(url);
  }

  public getFromUrl(url: string): Observable<any> {
    return this.defaultHttpClient.get(`${this.baseUrl}${url}`)
      .pipe(catchError(() => empty()));
  }

  public getPaginated(request?: PageRequest, url?: string): Observable<PageResult<T[]>> {
    if (!url) url = '';
    url += `${PAGEPARAMS(request)}`;
    return this.getFromUrl(url);
  }

  public get(id: number | string): Observable<T> {
    return this.getFromUrl(`/${id}`);
  }



  public search(parameter: any): Observable<T> {
    return this.getFromUrl(`?${parameter}`);
  }

  constructor(public defaultHttpClient: HttpClient, public baseUrl: string) { }

  
}
