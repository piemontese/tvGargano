import { Component, OnInit, Input } from '@angular/core';
import { VideoDataService } from '../../services/video-data.service';
import { VideoViewerService } from '../../services/video-viewer.service';

@Component({
  selector: 'app-video-grid',
  templateUrl: './video-grid.component.html',
  styleUrls: ['./video-grid.component.scss']
})
export class VideoGridComponent implements OnInit {
  public result: any;

  constructor( private videoDataService: VideoDataService,
               private videoViewerService: VideoViewerService ) {
  }

  public viewVideo( video ) {
    this.videoViewerService
      .open(video)
      .subscribe(res => this.result = res);
  }

  ngOnInit() {
  }

}
