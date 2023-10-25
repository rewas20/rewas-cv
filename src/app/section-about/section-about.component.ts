import { Component } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.css']
})
export class SectionAboutComponent {
  aboutMe: string = `A dedicated Full Stack Developer with a strong academic background in computer science and hands-on experience,
   including an internship at the Intensive Training Program from ITI (Information Technology Institute).
   Additionally, I have worked as a freelancer with numerous clients, specializing in building scalable,
    engaging, and user-friendly web applications. My objective is to benefit from the work, improve my skills,
     and progress so that I can serve the company and web solutions through my full-stack development skills, including PHP, Laravel, HTML, CSS, and JavaScript.`;
  urlDowonload = "https://drive.google.com/uc?export=download&id=1cAgHsaOunGWW_swo-x-oq2fQQPXwf8Ep";
}
