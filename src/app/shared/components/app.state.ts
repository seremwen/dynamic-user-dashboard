import {  sharedReducer } from "../store/Shared/shared.reducer";
import { SHARED_STATE_NAME } from "../store/Shared/shared.selector";
import { SharedState } from "../store/Shared/shared.state";


export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: sharedReducer,
  
};
