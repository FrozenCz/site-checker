import { Component } from '@angular/core';


interface Offer {
  name: string;
  image: string;
}

@Component({
  selector: 'app-what-ioffer',
  standalone: true,
  imports: [],
  templateUrl: './what-ioffer.component.html',
  styleUrl: './what-ioffer.component.scss'
})
export class WhatIofferComponent {
 offers: Offer[] = [
  {name: 'Cenová analýza', image: '/offers/cenova-analyza.jpg'},
  {name: 'Aukce nemovitostí', image: '/offers/aukce-nemovitosti.jpg'},
  {name: 'Home staging', image: '/offers/home-staging.jpg'},
  {name: 'Matterport', image: '/offers/matterport.jpg'},
  {name: 'Open house', image: '/offers/open-house.jpg'},
  {name: 'Poradenství', image: '/offers/poradenstvi.jpg'},
  {name: 'Právní servis', image: '/offers/pravni-servis.jpg'},
  {name: 'Půdory a 3D náhled', image: '/offers/pudorys.jpg'},
  {name: 'Soociální sítě', image: '/offers/socialni-site.jpg'},
  {name: 'Spolupráce v síti RE/MAX', image: '/offers/spoluprace-v-siti-remax.jpg'},
  {name: 'Videoprohlídka', image: '/offers/videoprohlidka.jpg'},
  {name: 'Koupě nemovitosti', image: '/offers/koupe-nemovitosti.jpg'},
  {name: 'Prodej nemovitosti', image: '/offers/prodej-nemovitosti.jpg'},
  {name: 'Pronájem nemovitosti', image: '/offers/pronajem-nemovitosti.jpg'},
 ]
}
