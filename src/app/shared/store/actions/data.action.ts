import {createAction, props} from "@ngrx/store";
import {PlanetInterface} from "../../interfaces/planet.interface";

export enum DataActionType {
  USER = '[User info] user',
  LOAD_PLANET = '[Load Planet] planet',
  LOADED_PLANET = '[Loaded Planet] planet',
  LOAD_FAIL_PLANET = '[Load Fail Planet] planet'
}

export const userAction = createAction(
  DataActionType.USER,
  props<{ username: string; age: number }>()
)

export const loadPlanetAction = createAction(
  DataActionType.LOAD_PLANET,
)

export const loadSuccessPlanetAction = createAction(
  DataActionType.LOADED_PLANET,
  props<{data: PlanetInterface}>()
)

export const loadFailPlanetAction = createAction(
  DataActionType.LOAD_FAIL_PLANET,
)

export const dataActions = {
  userAction,
  loadPlanetAction,
  loadSuccessPlanetAction,
  loadFailPlanetAction
}
