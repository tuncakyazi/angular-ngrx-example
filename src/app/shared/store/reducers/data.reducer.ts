import {createReducer, on} from "@ngrx/store";
import {dataActions, loadFailPlanetAction, loadSuccessPlanetAction} from '../actions/data.action'
import {PlanetInterface} from "../../interfaces/planet.interface";

export interface DataState {
  username: string;
  age: number;
  gender: string,
  planet: PlanetInterface,
  planetLoading: boolean,
  planetLoaded: boolean,
  planetLoadedFail: boolean,
}

export const INITIAL_STATE: DataState = {
  username: '',
  age: 0,
  gender: 'male',
  planet: {
    climate: '',
    created: '',
    diameter: '',
    edited: '',
    films: [],
    gravity: '',
    name: '',
    orbital_period: '',
    population: '',
    residents: [],
    rotation_period: '',
    surface_water: '',
    terrain: '',
    url: '',
  },
  planetLoading: false,
  planetLoaded: false,
  planetLoadedFail: false,
}

export const dataReducer = createReducer(
  INITIAL_STATE,
  on(dataActions.userAction, (state, {username, age}) => ({
    ...state,
    username: username,
    age: age
  })),
  on(dataActions.loadPlanetAction, state => ({
    ...state,
    planetLoading: true,
    planetLoaded: false,
    planetLoadedFail: false,
  })),
  on(dataActions.loadSuccessPlanetAction, (state, {data}) => ({
    ...state,
    planetLoading: false,
    planetLoaded: true,
    planetLoadedFail: false,
    planet: data,
  })),
  on(dataActions.loadFailPlanetAction, state => ({
    ...state,
    planetLoading: false,
    planetLoaded: false,
    planetLoadedFail: true,
  }))
)
