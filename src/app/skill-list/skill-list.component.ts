import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule, SkillComponent],
  template: `
    <div class="skill-list">
      <app-skill skill="fighting" emoji="💪" bgcolor="blue"></app-skill>
      <app-skill skill="leadership" emoji="💪" bgcolor="orange"></app-skill>
      <app-skill skill="sailing" emoji="💪" bgcolor="yellow" color="black"></app-skill>
      <app-skill skill="haki" emoji="👶" bgcolor="red"></app-skill>
    </div>
  `,
  styles: [
    `
      .skill-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 16px;
        color: white;
      }
    `,
  ],
})
export class SkillListComponent {}

//skill-list is passing the props to skill
