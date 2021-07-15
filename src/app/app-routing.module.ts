import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from './shared/components/main-layout/main-layout.component';
import {HomeComponent} from './components/home/home.component';
import {GuidesComponent} from './components/guides/guides.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {NewsComponent} from './components/news/news.component';
import {TheInternationalComponent} from './components/the-international/the-international.component';
import {TournamentsComponent} from './components/tournaments/tournaments.component';
import {PlayersComponent} from './components/players/players.component';
import {AdminModule} from './admin/admin.module';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomeComponent},
      {path: 'guides', component: GuidesComponent},
      {path: 'heroes', component: HeroesComponent},
      {path: 'news', component: NewsComponent},
      {path: 'players', component: PlayersComponent},
      {path: 'ti', component: TheInternationalComponent},
      {path: 'tournaments', component: TournamentsComponent}
    ]
  },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
