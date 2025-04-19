import {AfterViewInit, Component, ElementRef, inject, Optional, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {TokenService} from "../../token.service";
import {firstValueFrom} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';


@Component({
 selector: 'app-login-form',
 standalone: true,
 imports: [
  MatDialogContent,
  MatButton,
  MatDialogTitle,
  MatDialogActions,
  MatFormField,
  MatInput,
  FormsModule,
  MatError,
  MatIcon,
  ReactiveFormsModule,
  MatLabel,
  MatCardModule,
  NgIf,
 ],
 providers: [TokenService, MatSnackBar],
 templateUrl: './login-form.component.html',
 styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements AfterViewInit{
 @ViewChild('loginForm', {static: true, read: TemplateRef}) loginForm!: TemplateRef<any>;
 matDialogRef: MatDialogRef<LoginFormComponent> | undefined
 hide = true;
 usernameFormControl = new FormControl('testUser', [Validators.required]);
 passwordFormControl = new FormControl('tu3!', [Validators.required]);
 router = inject(Router);

 constructor(private tokenService: TokenService, private snackBack: MatSnackBar,  private matDialog: MatDialog) {
 }

 ngAfterViewInit(): void {
        this.matDialogRef = this.matDialog.open(this.loginForm)
    }

 logMeIn(username: string | null, password: string | null) {

  if (!username || !password) {
   throw new Error('username or password is missing ');
  }

  firstValueFrom(this.tokenService.sendCredentials({login: username, pass: password})).then(() => {
   this.snackBack.open('Success', undefined, {duration: 2000});
   this.matDialogRef?.close();
   this.router.navigate(['/admin'])
  })
   .catch(() => {
   this.snackBack.open('Fail');
  })
 }
}
