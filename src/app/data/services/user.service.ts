import { Injectable, Injector } from '@angular/core';
import { DefaultService } from './default.service';
import { EnvironmentInterface, User, _environment } from '..';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class UserService extends DefaultService<User> {
    private cache: { [url: string]: any } = {};
    private url = 'users/';
  
    constructor(httpClient: HttpClient, private injector: Injector) {
      super(httpClient, '');
      this.baseUrl = this.injector.get<EnvironmentInterface>(_environment).environment;
    }
  
    // Get user by ID from the server, with caching mechanism
    getUserById(id: any): Observable<any> {
      const url = `${this.url}${id}`;
      return this.getCachedData(url);
    }
  
    // Get users from the server, with caching mechanism
    getUsers(page: number): Observable<any> {
      const url = `${this.url}?page=${page}`;
      return this.getCachedData(url);
    }
  
    // Get data from cache if available, otherwise fetch from the server and cache the response
    private getCachedData(url: string): Observable<any> {
      if (this.cache[url]) { // Check if data is already cached
        return of(this.cache[url]); // Return cached data
      } else {
        return this.getFromUrl(url).pipe( // Fetch data from server
          map(response => {
            this.cache[url] = response; // Cache the response
            return response;
          }),
          catchError(error => {
            delete this.cache[url]; // Remove cached data on error
            return throwError(error);
          })
        );
      }
    }
  }