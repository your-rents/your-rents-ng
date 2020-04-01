import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yra-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  public isAuthenticated() {
    // return this.authService.isAuthenticated();
    return true;
  }

  ngOnInit(): void {
  }

}
