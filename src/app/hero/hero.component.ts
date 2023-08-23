import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public email = '';

  public submitForm(event: Event): void {
    event.preventDefault();
    console.log(`Form submitted with name: ${this.email}`);
  }
}
