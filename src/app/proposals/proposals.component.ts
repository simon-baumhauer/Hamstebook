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
    'assets/hamster/animal-g4d0a5a70e_640.jpg',
    'assets/hamster/animal-g547839c3c_640.jpg',
    'assets/hamster/animal-ga27e1abfe_640.jpg',
    'assets/hamster/hamster-g235dac38d_640.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
