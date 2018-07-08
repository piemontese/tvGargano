import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.component.html',
  styleUrls: ['./video-viewer.component.scss']
})
export class VideoViewerComponent implements OnInit {
  public video: any;

  constructor( public videoViewer: MdDialogRef<VideoViewerComponent> ) { }

  ngOnInit() {
  }

}
