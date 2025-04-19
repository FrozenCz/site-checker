import {Component, input, output, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatListItem} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-nav-item',
  standalone: true,
 imports: [
  RouterLink,
  RouterLinkActive,
  MatListItem,
  MatIcon,
  MatTooltip
 ],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.scss'
})
export class NavItemComponent {

  routerLink = input<string>()
  icon = input<string>()
  name = input<string>()
 clicked = output()

 compactMode = input<boolean>();
 tooltip = input<string >();
}
