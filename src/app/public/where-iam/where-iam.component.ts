import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-where-iam',
  standalone: true,
 imports: [
  MatDialogContent,
  MatDialogTitle,
  MatDialogActions,
  MatButton,
  MatDialogClose,
  MatIcon
 ],
  templateUrl: './where-iam.component.html',
  styleUrl: './where-iam.component.scss'
})
export class WhereIAmComponent {

}
