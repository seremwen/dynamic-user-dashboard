import { createFeatureSelector, createSelector } from "@ngrx/store";
import { User } from "../../../models";
import {UserState, initialState} from "../reducers/user.reducer"

export const selectUserState = createFeatureSelector<UserState>('users');


export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUserMetadata = createSelector(
  selectUserState,
  (state: UserState) => ({
    page: state.page,
    per_page: state.per_page,
    total_items: state.total,
    total_pages: state.total_pages
  })
);
export const selectSelectedUser = createSelector(
    selectUserState,
    (state: UserState) => state.selectedUser
  );