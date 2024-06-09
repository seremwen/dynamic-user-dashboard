// actions/users.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadUsers = createAction('[User List] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction('[User List] Load Users Success', props<{ users: any[], page: number, per_page: number, total: number, total_pages: number }>());
export const loadUsersFailure = createAction('[User List] Load Users Failure', props<{ error: any }>());

export const loadUser = createAction('[User Details] Load User', props<{ id: any }>());
export const loadUserSuccess = createAction('[User Details] Load User Success', props<{ user: any }>());
export const loadUserFailure = createAction('[User Details] Load User Failure', props<{ error: any }>());

export const searchUsers = createAction('[User] Search Users', props<{ id: any }>());
export const searchUsersSuccess = createAction('[User] Search Users Success',props<{ users: any[] }>());
export const searchUsersFailure = createAction('[User] Search Users Failure',props<{ error: any }>());