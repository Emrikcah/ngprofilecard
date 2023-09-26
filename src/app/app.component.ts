import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillListComponent } from './skill-list/skill-list.component';
import { IntroComponent } from './intro/intro.component';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SkillListComponent, IntroComponent, AvatarComponent],
  template: `
    <div class="center">
      <div class="card">
        <app-avatar></app-avatar>
        <div class="padding">
          <app-intro></app-intro>
          <app-skill-list></app-skill-list>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .padding {
        padding: 20px;
      }
      .center {
        display: grid;
        place-items: center;
        height: 100vh;
      }
      .card {
        width: 400px;
        border: 1px solid red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ngprofilecard';
}
