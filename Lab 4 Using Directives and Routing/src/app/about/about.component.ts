import { Component } from '@angular/core';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  //String Interpolation

  position = "Student"
  work_experience= 0
  email = "lfgarcia2@student.hau.edu.ph"
  website = "skully.example.com"
  phone = "+63-906-607-8989"

  imageUrl: string="assets/lou.jpg";
  imageW: number = 20;
  imageH: number = 40;
}
