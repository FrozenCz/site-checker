import {Component, HostListener, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatButton, MatMiniFabButton} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {NgIf} from '@angular/common';
import {Event} from '@angular/router';
import {animate, style, transition, trigger} from '@angular/animations';
import {timer} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {WhereIAmComponent} from '../where-iam/where-iam.component';

@Component({
 selector: 'app-navigation',
 standalone: true,
 imports: [
  MatIcon,
  NgIf,
  MatMenuModule,
  MatButton,
  MatMiniFabButton,
 ],
 templateUrl: './navigation.component.html',
 styleUrl: './navigation.component.scss',
 animations: [
  trigger('navAnimation', [
   transition(':enter', [
    style({ opacity: 0 }),
    animate('300ms ease-in-out', style({ opacity: 1 }))
   ]),
   transition(':leave', [
    animate('300ms ease-in-out', style({ opacity: 0}))
   ])
  ])
 ]
})
export class NavigationComponent {
 isMobile = true;
 showMenu: boolean = false;
 private matDialog = inject(MatDialog)

 constructor() {
  this.onResize();
 }

 @HostListener('window:resize', ['$event'])
 onResize(event?: Event) {
  if (typeof window !== "undefined") {
   // this.isMobile = window.innerWidth <= 768;
   this.isMobile = window.innerWidth <= 1024;
  }
 }

 onMenuClicked() {
  timer(0).subscribe(() => {
   this.showMenu=false
  });
 }

 showWhereIAm() {
  this.matDialog.open(WhereIAmComponent, {panelClass: 'whereIAmDialog'})
 }
}

