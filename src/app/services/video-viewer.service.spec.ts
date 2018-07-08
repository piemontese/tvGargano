import { TestBed, inject } from '@angular/core/testing';

import { VideoViewerService } from './video-viewer.service';

describe('VideoViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VideoViewerService]
    });
  });

  it('should be created', inject([VideoViewerService], (service: VideoViewerService) => {
    expect(service).toBeTruthy();
  }));
});
