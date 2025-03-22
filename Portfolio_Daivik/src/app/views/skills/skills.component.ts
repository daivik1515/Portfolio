import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  animations: [
    trigger('fadeEnlarge', [
      transition(':leave', [
        style({ opacity: 1, transform: 'scale(1)' }),
        animate('1.5s ease-out', style({ opacity: 0, transform: 'scale(1.2)' }))
      ])
    ])
  ]
})
export class SkillsComponent { }
