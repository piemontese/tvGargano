webpackJsonp([1],{0:function(t,e,n){t.exports=n("cDNt")},"5USF":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"md-card{margin-top:5px;background-color:hsla(0,0%,100%,.8)}.video-container{position:-webkit-sticky;position:sticky;-webkit-transform:translate(10%);transform:translate(10%)}",""]),t.exports=t.exports.toString()},"71FD":function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},Dk7z:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"md-card{margin-top:5px;background-color:hsla(0,0%,100%,.8)}.video-container{position:-webkit-sticky;position:sticky;-webkit-transform:translate(10%);transform:translate(10%)}",""]),t.exports=t.exports.toString()},Owtv:function(t,e){t.exports="<p>\n  advertising works!\n</p>\n"},QkXN:function(t,e){t.exports='<div fxLayout\n     fxLayout.xs="column"\n     fxLayoutAlign="center"\n     fxLayoutGap="5px"\n     fxLayoutGap.xs="0">\n  <div fxFlex="27%"><md-card>Articolo 1</md-card></div>\n  <div fxFlex="27%"><md-card>Articolo 2</md-card></div>\n  <div fxFlex="27%"><md-card>Articolo 3</md-card></div>\n  <div fxFlex="27%"><md-card>Articolo 4</md-card></div>\n</div>\n\n<div fxLayout\n     fxLayout.xs="column"\n     fxLayoutAlign="center"\n     fxLayoutGap="5px"\n     fxLayoutGap.xs="0">\n  <div fxFlex="27%"><md-card>Articolo 3</md-card></div>\n  <div fxFlex="27%"><md-card>Articolo 4</md-card></div>\n  <div fxFlex="27%"><md-card>Articolo 5</md-card></div>\n  <div fxFlex="27%"><md-card>Articolo 6</md-card></div>\n</div>\n'},RzWK:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,"md-card{margin-top:5px;background-color:hsla(0,0%,100%,.8)}",""]),t.exports=t.exports.toString()},UGpE:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=i([n.i(o._12)({selector:"app-news",template:n("QkXN"),styles:[n("RzWK")]}),r("design:paramtypes",[])],a)},VDs0:function(t,e){t.exports='<div *ngFor="let videos of videoDataService.matrix; let i=index;">\n  <div fxLayout\n       fxLayout.xs="column"\n       fxLayoutAlign="center"\n       fxLayoutGap="5px"\n       fxLayoutGap.xs="0">\n    <div fxFlex="27%" \n         *ngFor="let video of videos; let j=index;">\n      <md-card>\n        <md-grid-list cols="1" rowHeight="16:9">\n          <md-grid-tile>\n            <iframe width="100%" \n                    height="150" \n                    [src]="video" \n                    frameborder="0" \n                    allowfullscreen></iframe>\n          </md-grid-tile>\n        </md-grid-list>\n      </md-card>\n    </div>\n  </div>\n</div>\n'},W675:function(t,e,n){e=t.exports=n("rP7Y")(!1),e.push([t.i,".router-link-active{font-weight:700;color:blue;border-bottom:5px;border-bottom-color:#ff0}.fixed-top{position:fixed;top:0;left:0;z-index:999;width:100%}.transparent-background{background-color:hsla(0,0%,100%,.8)}.welcome-message{font-size:15px}",""]),t.exports=t.exports.toString()},"aR8+":function(t,e,n){"use strict";var o=n("fc+i"),i=n("/oeL"),r=n("Z04r"),a=n("fL27"),c=n("rgUS"),d=(n.n(c),n("b9Zm")),s=n("vnfH"),u=n("wQAS"),l=n("yOJg"),f=n("UGpE"),p=n("lolp"),m=n("pGXZ"),h=n("y4qh");n.d(e,"a",function(){return x});var v=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},x=function(){function t(){}return t}();x=v([n.i(i.b)({declarations:[u.a,l.a,f.a,p.a,m.a],imports:[o.a,a.a,r.a,r.b,r.c,d.a,s.a],providers:[h.a],bootstrap:[u.a]})],x)},auOE:function(t,e){t.exports='<md-card>\n\n  <md-grid-list cols="1" \n                rowHeight="3:1">\n    <md-grid-tile>\n      \x3c!--\n      <iframe width="50%" height="350" src="https://www.youtube.com/embed/AGR_YLhsKRg" frameborder="0" allowfullscreen></iframe>\n      --\x3e\n      <iframe width="50%" \n              height="350" \n              [src]="videoDataService.data[0]" \n              frameborder="0" \n              allowfullscreen></iframe>\n    </md-grid-tile>\n  </md-grid-list>\n\n  \n  \x3c!--\n  <div style="width:100%;height:100%;width: 820px; height: 461.25px; float: none; clear: both; margin: 2px auto;">\n    <embed src="https://www.youtube.com/v/AGR_YLhsKRg?version=3&amp;hl=en_US&amp;rel=0&amp;autohide=1&amp;autoplay=1" wmode="transparent" type="application/x-shockwave-flash" width="100%" height="100%" allowfullscreen="true" title="Adobe Flash Player">\n  </div>\n  --\x3e\n</md-card>\n\n\x3c!--\n<md-grid-list cols="3" rowHeight="3:1">\n  <md-grid-tile><md-card style="width: 100%;"></md-card></md-grid-tile>\n  <md-grid-tile><md-card style="width: 100%;"></md-card></md-grid-tile>\n  <md-grid-tile><md-card style="width: 100%;"></md-card></md-grid-tile>\n</md-grid-list>\n--\x3e\n\n<div fxLayout\n     fxLayout.xs="column"\n     fxLayoutAlign="center"\n     fxLayoutGap="5px"\n     fxLayoutGap.xs="0">\n  <div fxFlex="25%"><md-card><p>Articolo 1</p><p>kjhkhkj lkjlkjlk sdfg lllkjlkjlkj ljlkjlkj kjkkkjk</p></md-card></div>\n  <div fxFlex="25%"><md-card>Articolo 2</md-card></div>\n  <div fxFlex="25%"><md-card>Articolo 3</md-card></div>\n  <div fxFlex="25%"><md-card>Articolo 4</md-card></div>\n</div>\n<div fxLayout\n     fxLayout.xs="column"\n     fxLayoutAlign="center"\n     fxLayoutGap="5px"\n     fxLayoutGap.xs="0">\n  <div fxFlex="25%"><md-card><p>Articolo 5</p><p>kjhkhkj lkjlkjlk lllkjlkjlkj ljlkjlkj kjkkkjk</p></md-card></div>\n  <div fxFlex="25%"><md-card>Articolo 6</md-card></div>\n  <div fxFlex="25%"><md-card>&nbsp;</md-card></div>\n  <div fxFlex="25%"><md-card>&nbsp;</md-card></div>\n</div>\n'},cDNt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("/oeL"),i=n("Qa4U"),r=n("aR8+");n("p5Ee").a.production&&n.i(o.a)(),n.i(i.a)().bootstrapModule(r.a)},efyd:function(t,e){t.exports='    <div fxLayout fxLayout.xs="column">\n<div class="container-h-center " style="width: 80%">\n  <md-toolbar>\n\n    <div style="height=100px; margin-top: 30px;">\n    <img width="200" src="app/images/tvgargano.png" />\n    </div>\n    \n    <md-toolbar-row>\n      \x3c!--\n      <div class="container-h-center" style="width: 60%">\n        <button md-button [routerLink]="[\'/home\']" routerLinkActive="router-link-active" (click)="activeRoute=\'home\'" class="app-home-button" i18n>HOME</button>\n\n        <button md-button [routerLink]="[\'/news\']" routerLinkActive="router-link-active" (click)="activeRoute=\'news\'" class="app-home-button" i18n>NEWS</button>\n        \n        <button md-button [mdMenuTriggerFor]="menu">MENU</button>\n        <md-menu #menu="mdMenu">\n          <button md-menu-item>Item 1</button>\n          <button md-menu-item>Item 2</button>\n        </md-menu>\n      </div>\n      --\x3e\n      <div class="container-h-center" style="width: 60%"\n           fxLayout\n           fxLayout.xs="column"\n           fxLayoutAlign="center"\n           fxLayoutGap="5px"\n           fxLayoutGap.xs="0">\n        <div fxFlex="15%" fxFlex.xs="100%">\n          <button md-button [routerLink]="[\'/home\']" routerLinkActive="router-link-active" (click)="activeRoute=\'home\'" class="app-home-button" i18n>HOME</button>\n        </div>\n        <div fxFlex="15%">\n          <button md-button [routerLink]="[\'/news\']" routerLinkActive="router-link-active" (click)="activeRoute=\'news\'" class="app-home-button" i18n>NEWS</button>\n        </div>\n        <div fxFlex="15%">\n          <button md-button [routerLink]="[\'/video\']" routerLinkActive="router-link-active" (click)="activeRoute=\'video\'" class="app-home-button" i18n>VIDEO</button>\n        </div>\n        <div fxFlex="15%">\n          <button md-button [routerLink]="[\'/advertising\']" routerLinkActive="router-link-active" (click)="activeRoute=\'advertising\'" class="app-home-button" i18n>PUBBICITA\'</button>\n        </div>\n        \x3c!--\n        <div fxFlex="15%">\n          <button md-button [mdMenuTriggerFor]="menu">MENU</button>\n          <md-menu #menu="mdMenu">\n            <button md-menu-item>Item 1</button>\n            <button md-menu-item>Item 2</button>\n          </md-menu>\n        </div>\n        --\x3e\n      </div>\n    </md-toolbar-row>\n\n  </md-toolbar>\n\n  <router-outlet></router-outlet>\n</div>\n    </div>\n\n'},lolp:function(t,e,n){"use strict";var o=n("/oeL"),i=n("y4qh");n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.videoDataService=t}return t.prototype.ngOnInit=function(){},t}();c=r([n.i(o._12)({selector:"app-video",template:n("VDs0"),styles:[n("5USF")]}),a("design:paramtypes",["function"==typeof(d=void 0!==i.a&&i.a)&&d||Object])],c);var d},n7du:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="n7du"},p5Ee:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o={production:!0}},pGXZ:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return a});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();a=i([n.i(o._12)({selector:"app-advertising",template:n("Owtv"),styles:[n("71FD")]}),r("design:paramtypes",[])],a)},vnfH:function(t,e,n){"use strict";var o=n("/oeL"),i=n("BkNc"),r=n("yOJg"),a=n("UGpE"),c=n("lolp"),d=n("pGXZ");n.d(e,"a",function(){return l});var s=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},u=[{path:"",component:r.a,children:[]},{path:"home",component:r.a,children:[]},{path:"news",component:a.a,children:[]},{path:"video",component:c.a,children:[]},{path:"advertising",component:d.a,children:[]}],l=function(){function t(){}return t}();l=s([n.i(o.b)({imports:[i.a.forRoot(u)],exports:[i.a]})],l)},wQAS:function(t,e,n){"use strict";var o=n("/oeL");n.d(e,"a",function(){return r});var i=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},r=function(){function t(){this.title="app"}return t}();r=i([n.i(o._12)({selector:"app-root",template:n("efyd"),styles:[n("W675")]})],r)},y4qh:function(t,e,n){"use strict";var o=n("/oeL"),i=n("fc+i");n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.sanitizer=t,this._data=[],this._matrix=[],this._columns=4,this.setData(),this.setMatrix(),console.log(this._data),console.log(this._matrix)}return Object.defineProperty(t.prototype,"data",{get:function(){return this._data},set:function(t){this.data=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"matrix",{get:function(){return this._matrix},set:function(t){this.matrix=t},enumerable:!0,configurable:!0}),t.prototype.setData=function(){this._data=[];var t=this.sanitizer.bypassSecurityTrustResourceUrl("https://youtube.com/embed/zhNcIOa0mEM?rel=0&amp");this._data.push(t),t=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/AGR_YLhsKRg?rel=0&amp"),this._data.push(t),t=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/k4fuMtPRgBU?rel=0&amp"),this._data.push(t),t=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/N6BuD26KWqs?rel=0&amp"),this._data.push(t),t=this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/aop1trg_fPc?rel=0&amp"),this._data.push(t)},t.prototype.setMatrix=function(){var t=0,e=0,n=0;for(this._matrix=[],t=0;t<this._data.length;t++)t%this._columns==0&&(this._matrix[e]=[]),this._matrix[e][n]=this._data[t],n=(t+1)%this._columns,e=0===n?++e:e;if(console.log("k = "+t),console.log("this._data.length % this._columns = "+this._data.length%this._columns),t%this._columns!=0)for(var o=t;o<t+this._columns-this._data.length%this._columns;o++)o%this._columns==0&&(this._matrix[e]=[]),this._matrix[e][n]=this.sanitizer.bypassSecurityTrustResourceUrl(""),n=(o+1)%this._columns,e=0===n?++e:e},t}();c=r([n.i(o.c)(),a("design:paramtypes",["function"==typeof(d=void 0!==i.b&&i.b)&&d||Object])],c);var d},yOJg:function(t,e,n){"use strict";var o=n("/oeL"),i=n("y4qh");n.d(e,"a",function(){return c});var r=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(r<3?i(a):r>3?i(e,n,a):i(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.videoDataService=t}return t.prototype.ngOnInit=function(){},t}();c=r([n.i(o._12)({selector:"app-home",template:n("auOE"),styles:[n("Dk7z")]}),a("design:paramtypes",["function"==typeof(d=void 0!==i.a&&i.a)&&d||Object])],c);var d}},[0]);