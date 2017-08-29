import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { VideoComponent } from './components/video/video.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';

import { VideoDataService } from './services/video-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    VideoComponent,
    AdvertisingComponent
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
    VideoDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
