import { Injectable, Injector } from '@angular/core';
import { DefaultService } from './default.service';
import { EnvironmentInterface, User, _environment } from '..';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService  extends DefaultService<User>{
  private url = 'users/'; 
  constructor(httpClient: HttpClient, private injector: Injector,){
    super(httpClient, ''); 
   
      this.baseUrl = this.injector.get<EnvironmentInterface>(_environment).environment;
  }
  getUserById(id:any): Observable<User> {
    return this.getFromUrl(`${this.url}${id}`);
    
  }
  getUsers(page:number): Observable<User> {
    return this.getFromUrl(`${this.url}?page=${page}`);
    
  }
 
}
