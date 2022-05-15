import { Component, OnInit, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name = 'Frederick';
  @Input() img = 'assets/hamster/animal-g4d0a5a70e_640.jpg';
  @Input() description = '3 Jahre alt';
  @Input() canFollow = true;

  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
