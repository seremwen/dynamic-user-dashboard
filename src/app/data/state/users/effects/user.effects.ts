import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import * as UserActions from '../actions/users.actions';
import { UserService } from '../../../services';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../shared/components/app.state';
import { setLoadingSpinner } from '../../../../shared/Shared/shared.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(action => {
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.userService.getUsers(action.page).pipe(
          map(response => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return UserActions.loadUsersSuccess({
              users: response.data,
              page: response.page,
              per_page: response.per_page,
              total: response.total,
              total_pages: response.total_pages
            });
          }),
          catchError(error => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(UserActions.loadUsersFailure({ error }));
          })
        );
      })
    )
  );
  
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      mergeMap(action => {
        // Assuming you want to set the spinner on before the API call
        this.store.dispatch(setLoadingSpinner({ status: true }));
        return this.userService.getUserById(action.id).pipe(
          map(response => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return UserActions.loadUserSuccess({ user: response.data });
          }),
          catchError(error => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return of(UserActions.loadUserFailure({ error }));
          })
        );
      })
    )
  );
  

  constructor(private actions$: Actions, private store: Store<AppState>, private http: HttpClient,private userService:UserService) {}
}


