import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  public show: boolean = false;

  ngOnInit() {
  }


  toggleNav() {
    this.show = !this.show;
  }

}
