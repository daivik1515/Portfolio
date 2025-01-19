import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './views/navbar/navbar.component';
import { AboutComponent } from './views/about/about.component';
import { SkillsComponent } from './views/skills/skills.component';
import { SkillCardsComponent } from './views/skill-cards/skill-cards.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,AboutComponent,SkillsComponent,SkillCardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio_Daivik';
}
