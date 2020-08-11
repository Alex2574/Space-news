import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HubblePageComponent } from './hubble-page/hubble-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { SentEmailComponent } from './sent-email/sent-email.component';
import { News01Component } from './news-page/news-content/news01/news01.component';
import { NewsContentComponent } from './news-page/news-content/news-content.component';
import { News03Component } from './news-page/news-content/news03/news03.component';
import { News02Component } from './news-page/news-content/news02/news02.component';
import { News05Component } from './news-page/news-content/news05/news05.component';
import { News04Component } from './news-page/news-content/news04/news04.component';
import { News06Component } from './news-page/news-content/news06/news06.component';
import { News07Component } from './news-page/news-content/news07/news07.component';
import { News08Component } from './news-page/news-content/news08/news08.component';
import { News09Component } from './news-page/news-content/news09/news09.component';
import { News10Component } from './news-page/news-content/news10/news10.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'hubble', component: HubblePageComponent },
  { path: 'link', component: LinkPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/news-content', component: NewsContentComponent },
  { path: 'news/news-content/news01', component: News01Component },
  { path: 'news/news-content/news02', component: News02Component },
  { path: 'news/news-content/news03', component: News03Component },
  { path: 'news/news-content/news04', component: News04Component },
  { path: 'news/news-content/news05', component: News05Component },
  { path: 'news/news-content/news06', component: News06Component },
  { path: 'news/news-content/news07', component: News07Component },
  { path: 'news/news-content/news08', component: News08Component },
  { path: 'news/news-content/news09', component: News09Component },
  { path: 'news/news-content/news10', component: News10Component },
  { path: 'email', component: SentEmailComponent },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
