import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrls: ['./hamster-card.component.scss'],
})
export class HamsterCardComponent implements OnInit {
  @Input() text: string = '';
  @Input() image: string = '';

  constructor() {}

  ngOnInit(): void {}
}
