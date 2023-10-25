import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  name: string ="Rewas";
  email: string = "rewasssafwat51@gmail.com";
  tel: string = "+20 120 159 9719";
  links: any = {
    facebook: "https://www.facebook.com/rewass.safout",
    twitter: "http://www.twitter.com",
    linkedin: "https://www.linkedin.com/in/rewas-safwat-762220233/"
  }
}
