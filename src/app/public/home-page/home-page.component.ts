import {afterNextRender, Component, inject, LOCALE_ID, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {CooperationComponent} from '../cooperation/cooperation.component';
import {WhatIofferComponent} from '../what-ioffer/what-ioffer.component';
import {NgIf} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {ContactFormComponent} from '../contact-form/contact-form.component';
import {AdvertisementHomePage} from './home-page.model';
import {HomePageService} from './home-page.service';
import {RouterLink} from '@angular/router';

@Component({
 selector: 'app-home-page',
 standalone: true,
 imports: [
  MatIcon,
  CooperationComponent,
  WhatIofferComponent,
  NgIf,
  ContactFormComponent,
  RouterLink
 ],
 templateUrl: './home-page.component.html',
 styleUrl: './home-page.component.scss',
 animations: [
  trigger(
   'inOutAnimation',
   [
    transition(
     ':enter',
     [
      style({height: 0, opacity: 0}),
      animate('1s ease-out',
       keyframes([
        style({height: 0, opacity: 0, offset: 0}),
        style({height: 200, opacity: 0, offset: 0.5}),
        style({height: 250, opacity: 1, offset: 1})
       ]))
     ]
    ),
    transition(
     ':leave',
     [
      style({height: 250, opacity: 1}),
      animate('1s ease-in',
       keyframes([
        style({height: 250, opacity: 1, offset: 0}),
        style({height: 200, opacity: 0, offset: 0.5}),
        style({height: 0, opacity: 0, offset: 1})
       ]))
     ]
    )
   ]
  )
 ]
})
export class HomePageComponent {
 showContactForm = false;

 private service = inject(HomePageService);

 soldAdvertisements = signal<AdvertisementHomePage[]>([]);
 actualAdvertisements = signal<AdvertisementHomePage[]>([])

 constructor() {

  afterNextRender(async () => {
   this.soldAdvertisements.set(await this.service.getSoldAdvertisements());
   this.actualAdvertisements.set(await this.service.getActualAdvertisements());
  })

 }


}
