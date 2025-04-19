import {Component, effect, inject, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatList} from "@angular/material/list";
import {MatDialog} from '@angular/material/dialog';
import {NavItemComponent} from './nav-item/nav-item.component';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {NavLink} from './nav-item/nav-item.model';

@Component({
  selector: 'app-admin',
  standalone: true,
 imports: [
  RouterLink,
  RouterOutlet,
  MatList,
  NavItemComponent,
  FormsModule,
  NgClass
 ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
 private matDialog = inject(MatDialog);
 private router = inject(Router);
 private route = inject(ActivatedRoute);
 compactMode = signal<boolean>(localStorage?.getItem('compactMode') === 'true');

 menu: NavLink[] = [
  {name: 'Home', routerLink: '/admin', icon: 'home', tooltip: 'Home'},
  {name: 'Sites', routerLink: '/admin/sites', icon: 'list', tooltip: 'Sites'}
 ]

 constructor() {
  effect(() => {
   localStorage?.setItem('compactMode', this.compactMode() ? 'true' : 'false');
  });

 }


 showNewItemDialog(): void {

 }

}
