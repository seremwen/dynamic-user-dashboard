import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as UserActions from '../actions/users.actions';
import { UserService } from '../../../services';

@Injectable()
export class UserEffects {
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
          ofType(UserActions.loadUsers),
          mergeMap(action =>
            this.userService.getUsers(action.page).pipe(
                
              map(response => UserActions.loadUsersSuccess({
                users: response.data,
                page: response.page,
                per_page: response.per_page,
                total: response.total,
                total_pages: response.total_pages
              })),
              catchError(error => of(UserActions.loadUsersFailure({ error })))
            )
          )
        )
      );
      loadUser$ = createEffect(() =>
        this.actions$.pipe(
          ofType(UserActions.loadUser),
          mergeMap(action =>
            this.userService.getUserById(action.id).pipe(
              map(response => UserActions.loadUserSuccess({ user: response.data })),
              catchError(error => of(UserActions.loadUserFailure({ error })))
            )
          )
        )
      );

  constructor(private actions$: Actions, private http: HttpClient,private userService:UserService) {}
}


