import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendService {
  names = [];
  description = [];
  images = [];

  constructor() {}

  // addFriend
  addFriend(name: string, text: string, image: string) {
    this.names.push(name);
    this.description.push(text);
    this.images.push(image);
  }
}
