import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomeComponent } from './components/home/home.component';
import { TournamentsComponent } from './components/tournaments/tournaments.component';
import { GuidesComponent } from './components/guides/guides.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NewsComponent } from './components/news/news.component';
import { TheInternationalComponent } from './components/the-international/the-international.component';
import {AdminModule} from './admin/admin.module';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { PlayersComponent } from './components/players/players.component';
import {HeroesService} from './services/heroes.service';
import {SharedModule} from './shared/shared.module';
import { SliderComponent } from './shared/components/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomeComponent,
    TournamentsComponent,
    GuidesComponent,
    HeroesComponent,
    NewsComponent,
    TheInternationalComponent,
    NavBarComponent,
    PlayersComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SharedModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
