import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HubblePageComponent } from './hubble-page/hubble-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SentEmailComponent } from './sent-email/sent-email.component';
import { NewsContentComponent } from './news-page/news-content/news-content.component';
import { News01Component } from './news-page/news-content/news01/news01.component';
import { News02Component } from './news-page/news-content/news02/news02.component';
import { News03Component } from './news-page/news-content/news03/news03.component';
import { News04Component } from './news-page/news-content/news04/news04.component';
import { News05Component } from './news-page/news-content/news05/news05.component';
import { News06Component } from './news-page/news-content/news06/news06.component';
import { News07Component } from './news-page/news-content/news07/news07.component';
import { News08Component } from './news-page/news-content/news08/news08.component';
import { News09Component } from './news-page/news-content/news09/news09.component';
import { News10Component } from './news-page/news-content/news10/news10.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { ImageService } from './image/shared/image.service';
import { ImageFilterPipe } from './image/shared/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    NewsPageComponent,
    GalleryPageComponent,
    HubblePageComponent,
    AboutPageComponent,
    LinkPageComponent,
    SentEmailComponent,
    NewsContentComponent,
    News01Component,
    News02Component,
    News03Component,
    News04Component,
    News05Component,
    News06Component,
    News07Component,
    News08Component,
    News09Component,
    News10Component,
    ImageFilterPipe,
    ImageDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AppRoutingModule,
  ],
  providers: [ImageService, ImageFilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
