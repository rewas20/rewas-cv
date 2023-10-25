import { Component } from '@angular/core';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.css']
})
export class SectionPortfolioComponent {
  portoflio: Array<String> = ["web design","mobile design",
                            "loogo design","web application development",
                            "mobile application development","pwa development"]
}
