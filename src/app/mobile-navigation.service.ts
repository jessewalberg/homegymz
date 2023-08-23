// mobile-nav.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MobileNavService {
  private isOpenSubject = new BehaviorSubject<boolean>(false);
  public isOpen$ = this.isOpenSubject.asObservable();

  toggleNav() {
    this.isOpenSubject.next(!this.isOpenSubject.value);
  }

  closeNav() {
    this.isOpenSubject.next(false);
  }

  openNav() {
    this.isOpenSubject.next(true);
  }
}
