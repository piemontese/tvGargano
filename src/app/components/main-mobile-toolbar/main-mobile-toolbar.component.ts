import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-mobile-toolbar',
  templateUrl: './main-mobile-toolbar.component.html',
  styleUrls: ['./main-mobile-toolbar.component.scss']
})
export class MainMobileToolbarComponent implements OnInit {
  viewMenu = false;
  menuTooltip = 'Mostra menu';

  constructor() { }

  menuClick() {
    this.viewMenu = !this.viewMenu;
    this.menuTooltip = this.viewMenu === true ? 'Nascondi menu' : 'Mostra menu';
  }

  ngOnInit() {
  }

}
