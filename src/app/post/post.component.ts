import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  standalone: true,
})
export class PostComponent {
  postImage = input.required<string>();
  imageSelected = output<string>();
}
