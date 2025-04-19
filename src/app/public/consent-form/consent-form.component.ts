import { Component } from '@angular/core';

declare global {
 interface Window {
  gtag: any;
 }
}

@Component({
  selector: 'app-consent-form',
  standalone: true,
  imports: [],
  templateUrl: './consent-form.component.html',
  styleUrl: './consent-form.component.scss'
})
export class ConsentFormComponent {
 userConsent: { [key: string]: 'granted' | 'denied' } = {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
 };

 updateConsent(): void {
  if (typeof window !== 'undefined' && window.gtag) {
   window.gtag('consent', 'update', this.userConsent);
  }
 }

 acceptAll(): void {
  this.userConsent = {
   'ad_storage': 'granted',
   'ad_user_data': 'granted',
   'ad_personalization': 'granted',
   'analytics_storage': 'granted',
  };
  this.updateConsent();
 }

 denyAll(): void {
  this.userConsent = {
   'ad_storage': 'denied',
   'ad_user_data': 'denied',
   'ad_personalization': 'denied',
   'analytics_storage': 'denied',
  };
  this.updateConsent();
 }

}
