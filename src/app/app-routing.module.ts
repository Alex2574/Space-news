import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HubblePageComponent } from './hubble-page/hubble-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { SentEmailComponent } from './sent-email/sent-email.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'hubble', component: HubblePageComponent },
  { path: 'link', component: LinkPageComponent },
  { path: 'news', component: NewsPageComponent },
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
