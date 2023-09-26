import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skill" [ngStyle]="{ 'background-color': bgcolor, 'color': color }">
    <span>{{skill}}</span>
    <span>{{emoji}}</span>
    </div>
  `,
  styles: [`
  .skill{
    padding: 2px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  }
  `
  ]
})
export class SkillComponent {
  //this component will receive  props
  @Input() skill=''
  @Input() emoji=''
  @Input() bgcolor=''
  @Input() color=''

}


