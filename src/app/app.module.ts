import { environment } from 'src/environments/environment.prod';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
const firebaseConfig = environment.firebase || {};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { SerieBoxComponent } from './components/serie-box/serie-box.component';
import { SerieComponent } from './components/serie-box/serie/serie.component';
import { IdiomaComponent } from './components/serie-box/idioma/idioma.component';
import { ChaptersComponent } from './components/serie-box/chapters/chapters.component';
import { SeasonComponent } from './components/serie-box/season/season.component';
import { NavComponent } from './components/nav/nav.component';
import { GuardInterceptor } from './interceptors/guard.interceptor';
import { ChangeVideosComponent } from './components/video-player/change-videos/change-videos.component';
import { AuthComponent } from './auth/auth.component';
import { SearchComponent } from './components/search/search.component';
import { UserOptionsComponent } from './components/nav/user-options/user-options.component';
import { FooterComponent } from './components/footer/footer.component';
import { DisplayComponent } from './ads/display/display.component';
import { SeriesListComponent } from './components/list/series-list/series-list.component';
import { GraphQLModule } from './graphql.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    SignupComponent,
    SigninComponent,
    VideoPlayerComponent,
    SerieBoxComponent,
    SerieComponent,
    IdiomaComponent,
    ChaptersComponent,
    SeasonComponent,
    NavComponent,
    ChangeVideosComponent,
    AuthComponent,
    SearchComponent,
    UserOptionsComponent,
    FooterComponent,
    DisplayComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    GraphQLModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:GuardInterceptor,
      multi:true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
