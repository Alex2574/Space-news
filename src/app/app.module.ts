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
import {SentEmailComponent} from './sent-email/sent-email.component';
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
    SentEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
