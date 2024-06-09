import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, empty, map } from 'rxjs';


export class DefaultService<T> {
  public getAll(): Observable<T[]> {
    const url = `/all`;
    return this.getFromUrl(url);
  }

  public getFromUrl(url: string): Observable<any> {
    return this.defaultHttpClient.get(`${this.baseUrl}${url}`)
      .pipe(catchError(() => empty()));
  }

  // public getPaginated(request?: PageRequest, url?: string): Observable<PageResult<T[]>> {
  //   if (!url) url = '';
  //   url += `${PAGEPARAMS(request)}`;
  //   return this.getFromUrl(url);
  // }
  // public getColourPaginated(request?: PageRequest, url?: string): Observable<PageResult<T[]>> {
  //   if (!url) url = '';
  //   return this.getFromUrl(url);
  // }

  public get(id: number | string): Observable<T> {
    return this.getFromUrl(`/${id}`);
  }

  // public getPermission(url: string): Observable<any[]>{
  //     return this.defaultHttpClient.get<{product:any[]}>(`${this.baseUrl}${url}`).pipe(
  //                     map(product => product.product)
                     
  //     );
  //     }

  public post(body: T): Observable<any> {
    return this.postToUrl('', body);
  }

  public postToUrl(url: string, body: any): Observable<any> {
    return this.defaultHttpClient.post(`${this.baseUrl}${url}`, body, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => response.body));
  }

  public update(body: T): Observable<any> {
    return this.updateToUrl('', body);
  }

  public updateToUrl(url: string, body: any): Observable<any> {
    return this.defaultHttpClient.put(`${this.baseUrl}${url}`, body, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => response.body));
  }

  public delete(url: string): Observable<any> {
    return this.defaultHttpClient.delete(`${this.baseUrl}${url}`, {
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => response.body));
  }

  public search(parameter: any): Observable<T> {
    return this.getFromUrl(`?${parameter}`);
  }

  constructor(public defaultHttpClient: HttpClient, public baseUrl: string) { }

  
}
