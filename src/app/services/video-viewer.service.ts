import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { VideoViewerComponent } from '../components/video-viewer/video-viewer.component';

@Injectable()
export class VideoViewerService {

  constructor( private dialog: MdDialog ) { }

  public open( video ): Observable<boolean> {

    let dialogRef: MdDialogRef<VideoViewerComponent>;

    dialogRef = this.dialog.open(VideoViewerComponent, {
      width: '70%',
 //     height: '80%',
     disableClose: true,  // modal
   });
    dialogRef.componentInstance.video = video;

    return dialogRef.afterClosed();
  }
  
}
