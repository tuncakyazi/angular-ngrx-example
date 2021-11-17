import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./shared/store";
import {dataActions} from "./shared/store/actions/data.action";
import {Observable} from "rxjs";
import {planetSelector, usernameSelector} from "./shared/store/selectors/data.selector";
import {PlanetInterface} from "./shared/interfaces/planet.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public username: string = '';
  public planet: PlanetInterface = {
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
  };

  private username$: Observable<string> = this.store.select(usernameSelector)
  private planet$: Observable<PlanetInterface> = this.store.select(planetSelector)

  constructor(protected store: Store<AppState>) {}

  public ngOnInit() {
    this.username$.subscribe((username: string) => {
      this.username = username;
    })
    this.planet$.subscribe((planet: PlanetInterface) => {
      this.planet = planet;
    })
  }

  public submit = (username: string, age: number) =>  {
    this.store.dispatch(dataActions.userAction({ username: username, age: age }));
  }

  public loadPlanet = () => {
    this.store.dispatch(dataActions.loadPlanetAction());
  }

  title = 'angular-ngrx';
}
