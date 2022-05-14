import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit {
  names = ['Marius', 'Franzisaka', 'Josephine', 'Parick'];
  description = [
    '2 Jahre, gräbt geren löcher ',
    'Spielt geren',
    'Ein Hamsterrad-freak',
    'Stopft sich den Mund gerne zu voll',
  ];
  images = [
    'assets/hamster/2.jpg',
    'assets/hamster/3.jpg',
    'assets/hamster/4.jpg',
    'assets/hamster/5.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
