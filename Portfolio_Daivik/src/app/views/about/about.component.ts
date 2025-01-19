import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  
  introLine:string="";
  
  async ngOnInit(): Promise<void> {
    const tempIntro = 'HEY, I AM DAIVIK';
    for (let i = 0; i < tempIntro.length; i++) {
        await this.delay(120);
        this.introLine += tempIntro[i]; 
    }
  }
  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
