import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names = ['Marius'];
  description = ['2 Jahre, gräbt geren löcher '];
  images = ['assets/hamster/animal-g4d0a5a70e_640.jpg'];

  constructor() {}

  // addFriend
  addFriend(name: string, text: string, image: string) {
    this.names.push(name);
    this.description.push(text);
    this.images.push(image);
  }
}
