import {Component, inject} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatFormField, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {gqlApi} from './new-reality.api';
import {firstValueFrom} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
 selector: 'app-new-reality-name',
 standalone: true,
 imports: [
  MatDialogContent,
  MatFormField,
  MatInput,
  FormsModule,
  MatDialogActions,
  MatButton,
  MatHint,
  MatLabel
 ],
 templateUrl: './new-reality-name.component.html',
 styleUrl: './new-reality-name.component.scss'
})
export class NewRealityNameComponent {
 newName = '';

 dialogRef = inject(MatDialogRef);
 api = inject(gqlApi);
 snackBar = inject(MatSnackBar);

 onNoClick() {
  this.dialogRef.close()
 }

 async createNewItem(newName: string) {
  try {
   const uuid = (await firstValueFrom(this.api.createNewReality({createAdvertisementInput: {name: newName}}))).data?.createAdvertisement.uuid
   if (uuid) {
    this.dialogRef.close({uuid})
   }
  } catch (e) {
   this.snackBar.open('Nepodařilo se vytvořit novou nemovitost', 'Zavřít', {panelClass: 'errorBar'})
   console.error(e)

  }


 }
}
