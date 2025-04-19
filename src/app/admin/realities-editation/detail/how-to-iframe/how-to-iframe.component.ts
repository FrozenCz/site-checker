import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-how-to-iframe',
  standalone: true,
 imports: [
  MatDialogContent,
  MatDialogActions,
  MatDialogTitle,
  MatButton,
  MatDialogClose
 ],
  templateUrl: './how-to-iframe.component.html',
  styleUrl: './how-to-iframe.component.scss'
})
export class HowToIframeComponent {

}
