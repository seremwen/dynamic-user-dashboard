import { createReducer, on } from "@ngrx/store";
import * as UserActions from "../actions/users.actions";

export interface UserState {
    users: any[];
    selectedUser: any;
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    error: any;
  }
  
  export const initialState: UserState = {
    users: [],
    selectedUser: null,
    page: 1,
    per_page: 6,
    total: 0,
    total_pages: 0,
    error: null,
  };
  
  
  export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUsersSuccess, (state, { users, page, per_page, total, total_pages }) => ({
      ...state,
      users,
      page,
      per_page,
      total,
      total_pages,
      error: null
    })),
    on(UserActions.loadUsersFailure, (state, { error }) => ({
      ...state,
      error
    })),
    on(UserActions.loadUserSuccess, (state, { user }) => ({
        ...state,
        selectedUser: user,
        error: null
      })),
      on(UserActions.loadUserFailure, (state, { error }) => ({
        ...state,
        error
      }))
  );
  