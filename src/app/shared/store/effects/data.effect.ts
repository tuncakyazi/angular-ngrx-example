import { Injectable } from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, mergeMap, of } from "rxjs";
import {PlanetService} from "../../services/planet.service";
import {dataActions, DataActionType} from "../actions/data.action";


@Injectable()
export class MovieEffects {

  loadPlanet$ = createEffect(() => this.actions$.pipe(
    ofType(DataActionType.LOAD_PLANET),
    mergeMap(() => this.planetService.getPlanet()
      .pipe(
        map((payload: any) => dataActions.loadSuccessPlanetAction({data: payload})),
        catchError(() => of(dataActions.loadFailPlanetAction()))
      )
    )
  ))

  constructor(
    private actions$: Actions,
    private planetService: PlanetService
  ) {}
}
