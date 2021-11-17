import {AppState} from "../index";
import {createSelector} from "@ngrx/store";
import {DataState} from "../reducers/data.reducer";

export const globalDataStateSelector = (state: AppState) => state.data;

export const usernameSelector = createSelector(
  globalDataStateSelector,
  (state: DataState) => state.username
)

export const planetSelector = createSelector(
  globalDataStateSelector,
  (state: DataState) => state.planet
)
