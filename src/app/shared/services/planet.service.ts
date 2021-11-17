import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  constructor (private http: HttpClient) {}

  getPlanet() {
    return this.http.get('https://swapi.dev/api/planets/1/');
  }
}
