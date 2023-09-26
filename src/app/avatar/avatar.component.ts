import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img src="assets/monkeyDLuffy.jpg" alt="luffy">
  `,
  styles: [`
  img{
    width: 100%;
    display:block;
  }
  `
  ]
})
export class AvatarComponent {

}
