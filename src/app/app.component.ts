import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postText = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich das ihr hier seid!',
    'Hey mein Name ist Susann. Ich bin 2 Jahre alt',
    'Ich esse geren Kekse',
  ];
  hamsterImages = [
    'assets/hamster/1.jpg',
    'assets/hamster/2.jpg',
    'assets/hamster/3.jpg',
    'assets/hamster/4.jpg',
    'assets/hamster/5.jpg',
    'assets/hamster/6.jpg',
  ];

  buttonClicked() {
    alert('hallo');
  }
}
