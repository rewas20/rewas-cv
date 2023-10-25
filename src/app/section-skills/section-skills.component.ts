import { Component } from '@angular/core';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.css']
})
export class SectionSkillsComponent {
  desc:string = `I have many skills in programming and web developments,I learnedn a lot of Programming Languages, scripting language and database tool languages `;
  skills: any = [
    {language: "HTML" ,degree:90 },
    {language: "CSS" ,degree:90 },
    {language: "Typescript" ,degree:30 },
    {language: "React" ,degree:60 },
    {language: "Angular" ,degree:35 },
    {language: "Javascript" ,degree:35 },
    {language: "Bootstrap" ,degree:80 },
    {language: "jQuery" ,degree:85 },
    {language: "Git-Hub" ,degree:70 },
    {language: "SQL" ,degree:70 },
    {language: "Photoshop" ,degree:70 },
    {language: "Json" ,degree:70 },
  ]
  focus: any =["Web Development", "Mobile Application","Responsive Design","UI/UX Designs"]
}
