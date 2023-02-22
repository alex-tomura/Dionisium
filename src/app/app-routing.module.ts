import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { SerieBoxComponent } from './components/serie-box/serie-box.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { AuthGuard } from './guards/auth.guard';
import { SaveVideoGuard } from './guards/save-video.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'list',
    component:ListComponent,
  },
  {
    path: 'serie/search',
    component:SearchComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'serie/player/:id/:season/:name',
    component:VideoPlayerComponent,
    canActivate:[AuthGuard],
    canDeactivate:[SaveVideoGuard]
  },
  {
    path:'serie/preview/:id/:name',
    component:SerieBoxComponent,
    canActivate:[AuthGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
