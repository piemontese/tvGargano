import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class VideoDataService {
  _data: Array<any> = [];
  _matrix: Array<Array<any>> = [];
  _columns: number = 4;
  
  constructor( private sanitizer: DomSanitizer ) {  
    this.setData();
    this.setMatrix();
    console.log(this._data);
    console.log(this._matrix);
  }
  
  get data(): Array<string> {
    return this._data;
  }
  
  set data( d: Array<string>) {
    this.data = d;
  }
  
  get matrix(): Array<Array<any>> {
    return this._matrix;
  }
  
  set matrix( m: Array<Array<any>>) {
    this.matrix = m;
  }
  
  /**
    Builds youtube video links array
   */
  private setData() {
    this._data = [];  // initialize data  
    let url = this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/zhNcIOa0mEM?rel=0&amp");
    this._data.push( url ); 
    url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/AGR_YLhsKRg?rel=0&amp");
    this._data.push( url ); 
    url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/k4fuMtPRgBU?rel=0&amp");
    this._data.push( url ); 
    url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/N6BuD26KWqs?rel=0&amp");
    this._data.push( url ); 
    url = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/aop1trg_fPc?rel=0&amp");
    this._data.push( url ); 
  }
  
  /**
    Builds matrix with this._colums columns from array this._data
   */
  private setMatrix() {
    let k = 0;
    let i = 0;
    let j = 0;
    this._matrix = [];  // initialize matrix  
    for( k=0; k<this._data.length; k++) {
      if( k % this._columns === 0 ) {
        this._matrix[i] = [];   // initialize next row
      }
      this._matrix[i][j] = this._data[k];
      j = (k+1) % this._columns;
      i = j===0 ? ++i : i;
    }
    console.log("k = " + k);
    console.log("this._data.length % this._columns = " + this._data.length % this._columns);
    if ( k % this._columns !== 0 ) {
  //    for( let m=k; m<this._data.length + this._data.length % this._columns + this._columns - 2; m++) {
      for( let m=k; m<k + this._columns - this._data.length % this._columns; m++) {
  //      debugger;
        if( m % this._columns === 0 ) {
          this._matrix[i] = [];
        }
        this._matrix[i][j] = this.sanitizer.bypassSecurityTrustResourceUrl("");
        j = (m+1) % this._columns;
        i = j===0 ? ++i : i;
      }
    }
  }
    
}
