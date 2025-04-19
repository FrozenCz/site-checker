import {Component, inject} from '@angular/core';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgxCaptchaModule} from 'ngx-captcha';
import {siteKey} from '../../../config';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {firstValueFrom} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-form',
  standalone: true,
 imports: [
  MatFormField,
  MatLabel,
  MatInput,
  MatError,
  MatButton,
  NgxCaptchaModule,
  ReactiveFormsModule
 ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

 private fb = inject(FormBuilder);
 private http = inject(HttpClient);
 private snackBar = inject(MatSnackBar);

 protected readonly siteKey = siteKey;
 contactForm: FormGroup = this.fb.group({
  name: ['', Validators.required],
  email: ['', Validators.required],
  phone: ['', Validators.required],
  message: [''],
  recaptcha: ['', Validators.required]
 });

 submitForm() {
  // const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  const uploadData = new FormData();

  uploadData.append('captcha', this.contactForm.value.recaptcha);
  uploadData.append('message', `
    Jméno: ${this.contactForm.value.name} <br>
    Email: ${this.contactForm.value.email} <br>
    Telefon: ${this.contactForm.value.phone} <br>
    Zpráva: ${this.contactForm.value.message} <br>
  `);
  // this.snackBar.open('Odesláno', 'Zavřít', {panelClass: 'successBar'});

  try {
   firstValueFrom(this.http.post('https://mail-server.milanknop.cz/send_from.php', uploadData)).then(() => {
    this.contactForm.reset();
    this.snackBar.open('Odesláno', 'Zavřít', {duration: 2000, panelClass: 'successBar'});
   })
  } catch (err) {
   this.snackBar.open('Něco se pokazilo', 'Zavřít', {duration: 2000, panelClass: 'errorBar'});
  }
 }
}
