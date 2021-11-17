import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {dataReducer, DataState} from "./reducers/data.reducer";

export interface AppState {
  data: DataState,
}

export const reducers: ActionReducerMap<AppState> = {
  data: dataReducer,
}

export const metaReducers: MetaReducer<AppState>[] = [];
