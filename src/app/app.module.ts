import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { VideoComponent } from './components/video/video.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';

import { VideoGridComponent } from './components/video-grid/video-grid.component';
import { VideoViewerComponent } from './components/video-viewer/video-viewer.component';

import { VideoDataService } from './services/video-data.service';
import { VideoViewerService } from './services/video-viewer.service';
import { MainToolbarComponent } from './components/main-toolbar/main-toolbar.component';
import { MainMobileToolbarComponent } from './components/main-mobile-toolbar/main-mobile-toolbar.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { ReclameComponent } from './components/reclame/reclame.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    VideoComponent,
    AdvertisingComponent,
    VideoGridComponent,
    VideoViewerComponent,
    MainToolbarComponent,
    MainMobileToolbarComponent,
    AdvertisementComponent,
    ReclameComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [
    VideoDataService,
    VideoViewerService
  ],
  entryComponents: [
    VideoViewerComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
