import { Component, input } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
})
export class PostComponent {
  postImage = input('');
}
