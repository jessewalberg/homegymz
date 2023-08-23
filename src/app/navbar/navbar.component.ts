import { Component, OnDestroy } from '@angular/core';
import { MobileNavService } from '../mobile-navigation.service';
import { ScreenSizeService } from '../view-size.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnDestroy {
  isMobileNavOpen: boolean = false;
  isMobileView: boolean = window.innerWidth <= 768;
  private isMobileNavOpenSub: Subscription;
  private isMobileViewSub: Subscription;
  whichIcon: string = 'menu';

  constructor(
    private mobileNavService: MobileNavService,
    private screenSizeService: ScreenSizeService
  ) {
    this.isMobileNavOpenSub = this.mobileNavService.isOpen$.subscribe(
      (state) => {
        this.isMobileNavOpen = state;
      }
    );

    this.isMobileViewSub = this.screenSizeService.isLargeScreen$.subscribe(
      (state) => {
        this.isMobileView = !state;
      }
    );
  }

  onHamburgerClick() {
    if (this.isMobileNavOpen) {
      this.mobileNavService.closeNav();
    } else if (!this.isMobileNavOpen) {
      this.mobileNavService.openNav();
    }
    this.whichIcon = this.isMobileNavOpen ? 'close' : 'menu';
  }

  ngOnDestroy(): void {
    this.isMobileViewSub.unsubscribe();
    this.isMobileNavOpenSub.unsubscribe();
  }
}
