import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { VideoComponent } from './components/video/video.component';
import { AdvertisingComponent } from './components/advertising/advertising.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: []
  },
  {
    path: 'home', component: HomeComponent,
    children: []
  },
  {
    path: 'news', component: NewsComponent,
    children: []
  },
  {
    path: 'video', component: VideoComponent,
    children: []
  },
  {
    path: 'advertising', component: AdvertisingComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
