import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name: string = "Rewas Safwat";
  title: string = "Front-End Web Developer";
  tel: string = "+20 120 159 9719";
}
