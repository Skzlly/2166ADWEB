import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab_Act_Bootstrap';
  Shirt1 = 'Vintage 1991 Metallica Band T-shirt Wild Oats All Over Print'

  clickCount=0
  clickMe() {
    this.clickCount++;
  }
  resetClickCount(){
    this.clickCount = 0;
  }
}
