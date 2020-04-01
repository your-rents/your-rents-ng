import { Component, EventEmitter, Output, OnInit } from "@angular/core";

import { NavigationEnd, Router } from "@angular/router";

// import { AuthService } from "auth";

@Component({
  selector: "yra-navigation-bar",
  templateUrl: "./navigation-bar.component.html",
  styleUrls: ["./navigation-bar.component.scss"]
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  private returnUrl = "/";

  //  constructor(private authService: AuthService, private router: Router) {
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.returnUrl = event.url;
      }
    });
  }

  public onProfile() {
    this.router.navigate(["users/profile"]);
  }

  public logout() {
    // this.authService.logout(this.returnUrl || "/");
  }

  ngOnInit(): void {}
}
