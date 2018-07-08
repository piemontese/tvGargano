import { Component, OnInit } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor( private videoDataService: VideoDataService ) { }

  ngOnInit() {
  }

}
