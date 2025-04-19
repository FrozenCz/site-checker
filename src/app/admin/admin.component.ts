import {Component, effect, inject, signal} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatList} from "@angular/material/list";
import {NewRealityNameComponent} from './realities-editation/new-reality-name/new-reality-name.component';
import {MatDialog} from '@angular/material/dialog';
import {NavItemComponent} from './nav-item/nav-item.component';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

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
 compactMode = signal<boolean>(localStorage.getItem('compactMode') === 'true');

 constructor() {
  effect(() => {
   localStorage.setItem('compactMode', this.compactMode() ? 'true' : 'false');
  });

 }


 showNewItemDialog(): void {
  const dialog = this.matDialog.open(NewRealityNameComponent);
  dialog.afterClosed().subscribe((result) => {
   if (result.uuid) {
    this.router.navigate([result.uuid], {relativeTo: this.route})
   }
  });
 }

}
