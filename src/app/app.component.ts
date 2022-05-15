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
    'assets/hamster/animal-g4d0a5a70e_640.jpg',
    'assets/hamster/animal-g547839c3c_640.jpg',
    'assets/hamster/animal-ga27e1abfe_640.jpg',
    'assets/hamster/hamster-g235dac38d_640.jpg',
    'assets/hamster/hamster-gf617cd4df_640.jpg',
    'assets/hamster/nature-g5348f7f86_640.jpg',
  ];

  buttonClicked() {
    alert('hallo');
  }
}
