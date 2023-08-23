import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private isLargeScreenSubject = new BehaviorSubject<boolean>(
    window.innerWidth > 768
  );
  public isLargeScreen$ = this.isLargeScreenSubject.asObservable();

  private previousWidth: number = window.innerWidth;

  constructor() {
    window.addEventListener('resize', this.updateScreenSize.bind(this));
  }

  private updateScreenSize() {
    const currentWidth = window.innerWidth;

    // Check if transitioning from under 768px to over, or vice versa
    if (
      (this.previousWidth <= 768 && currentWidth > 768) ||
      (this.previousWidth > 768 && currentWidth <= 768)
    ) {
      this.isLargeScreenSubject.next(currentWidth > 768);
    }

    this.previousWidth = currentWidth;
  }
}
