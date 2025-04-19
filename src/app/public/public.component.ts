import {afterNextRender, Component, HostListener, inject} from '@angular/core';
import {FooterComponent} from "./footer/footer.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {Event, RouterOutlet} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {NgClass} from '@angular/common';

declare global {
 interface Window {
  gtag: any;
 }
}

@Component({
  selector: 'app-public',
  standalone: true,
 imports: [
  FooterComponent,
  NavigationComponent,
  RouterOutlet,
  NgClass
 ],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {

 titleService = inject(Title)
 isMobile: boolean = false;

 constructor() {
  this.onResize();
  this.titleService.setTitle('Jana Adamová realitní makléř');
  afterNextRender(() => {
   this.initializeConsentMode();
  })

 }

 @HostListener('window:resize', ['$event'])
 onResize(event?: Event) {
  if (typeof window !== "undefined") {
   // this.isMobile = window.innerWidth <= 768;
   this.isMobile = window.innerWidth <= 1024;
  }
 }

 private initializeConsentMode(): void {
  if (typeof window !== 'undefined' && window.gtag) {
   window.gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500, // Wait for 500ms before sending data
   });
  }
 }

}
