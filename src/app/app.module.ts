import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {metaReducers, reducers} from "./shared/store";
import {PlanetService} from "./shared/services/planet.service";
import { EffectsModule } from '@ngrx/effects';
import {MovieEffects} from "./shared/store/effects/data.effect";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([MovieEffects]),
    HttpClientModule
  ],
  providers: [PlanetService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
