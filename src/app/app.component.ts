import { Component, signal } from '@angular/core';
import { PostComponent } from './post/post.component';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  TitleCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    PostComponent,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'Angular JS';
  name = signal('Rajesh Ranjan');
  logoImageURL = signal(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  );
  imageURL = signal('https://picsum.photos/id/237/200/300');
  currentDate = signal(new Date());
  currentTime = signal(new Date());

  cost = signal(2000);
  temperature = signal(23.434534);

  pizza = signal({
    toppings: ['pepperoni', 'margarita'],
    size: 'large',
  });

  getName() {
    return this.name();
  }

  changeImage(e: KeyboardEvent) {
    this.imageURL.set((e.target as HTMLInputElement).value);
  }

  logImage(e: string) {
    console.log(e);
  }
}
