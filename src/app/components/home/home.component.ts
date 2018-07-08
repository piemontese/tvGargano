import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  type = 'thumbnail';

  constructor( private videoDataService: VideoDataService ) { }

  ngOnInit() {
  }

}
