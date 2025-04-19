import {afterNextRender, AfterViewInit, Component, inject, signal} from '@angular/core';
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {DetailImage, DetailModel} from './detail.model';
import {gqlApi} from './detail.api';
import {ActivatedRoute} from '@angular/router';
import {firstValueFrom} from 'rxjs';
import {MatHint, MatLabel} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {v4 as uuidv4} from 'uuid';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {HowToIframeComponent} from './how-to-iframe/how-to-iframe.component';


@Component({
 selector: 'app-detail',
 standalone: true,
 imports: [
  MatInput,
  MatFormField,
  MatLabel,
  MatIcon,
  CdkDropList,
  CdkDrag,
  MatButton,
  MatSlideToggle,
  MatHint,
  ReactiveFormsModule
 ],
 templateUrl: './detail.component.html',
 styleUrl: './detail.component.scss'
})
export class DetailComponent {

 private matSnackBar = inject(MatSnackBar);
 private matDialog = inject(MatDialog);

 detail = signal<DetailModel | undefined>(undefined)
 images = signal<DetailImage[]>([])
 api = inject(gqlApi);
 route = inject(ActivatedRoute);
 fb = inject(FormBuilder);
 advertisementForm: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(5)]],
  description: [''],
  price: [0, [Validators.required, Validators.pattern(/^[0-9]/)]],
  status: '',
  published: '',
  video: '',
  map: ''
 })

 constructor() {
  afterNextRender(async () => {
   const uuid = this.route.snapshot.paramMap.get('uuid');
   if (uuid) {
    const result = (await firstValueFrom(this.api.getDetail({uuid})))
    const detail = result.data?.advertisement


    this.detail.set({
     uuid: detail.uuid,
     name: detail.name,
     description: detail.description,
     price: detail.price,
     createdAt: new Date(detail.createdAt),
     published: detail.published,
     status: detail.status as 'actual' | 'sold',
     video: detail.video,
     map: detail.map
    })

    this.advertisementForm.patchValue({
     uuid: detail.uuid,
     name: detail.name,
     description: detail.description,
     price: detail.price,
     createdAt: new Date(detail.createdAt),
     published: detail.published,
     status: detail.status === 'sold',
     video: detail.video,
     map: detail.map
    })

    const defaultimages = result.data?.advertisement.advertisementImages

    if (defaultimages) {
     this.images.set(defaultimages.map(image => ({
      uuid: image.uuid,
      src: image.imageUrl,
      order: image.order
     })))
    }
   }
  })
 }


 onFiesChange($event: Event) {
  const target = $event.target as HTMLInputElement;
  const files = target.files ?? [];
  const uuid = this.detail()?.uuid

  if (uuid) {
   Array.from(files).forEach(async file => {
    this.uploadFile(file, uuid)
   })
  }
 }

 private uploadFile(file: File, uuid: string) {
  const placeHolder = uuidv4();
  const formData = new FormData();
  formData.append('file', file);
  this.images.set([...this.images(), {
   uuid: placeHolder,
   src: URL.createObjectURL(file),
   order: this.images().length + 1
  }])
  fetch('/api/advertisement/' + uuid + '/images', {
   method: 'POST',
   body: formData
  }).then(async response => {
   if (response.ok) {
    const data = await response.json()
    this.images.set(this.images().map(image => {
     if (image.uuid === placeHolder) {
      return {...image, uuid: data.uuid, src: data.imageUrl}
     }
     return image
    }))
   }

  })
 }

 drop($event: CdkDragDrop<any, any>) {
  moveItemInArray(this.images(), $event.previousIndex, $event.currentIndex)
  const uuid = this.detail()?.uuid
  if (uuid) {
   const imageOrder = this.images().map((image, index) => image.uuid)
   firstValueFrom(this.api.updateImagesOrder({
    advertisementUuid: uuid,
    updateImagesOrderInput: imageOrder
   })).then(() => {
   })
  }
 }

 deleteImage(uuid: string) {

  const adUuid = this.detail()?.uuid
  if (adUuid) {
   firstValueFrom(this.api.deleteImage({uuid: adUuid, imageUuid: uuid})).then(() => {
    const images = this.images().filter(image => image.uuid !== uuid)
    this.images.set(images)
   })
  }
 }

 save(detail1: DetailModel | undefined) {
  if(detail1){
   firstValueFrom(this.api.updateAdvertisement({uuid: this.detail()!.uuid, updateAdvertisementInput: {
     status: detail1.status ? 'sold' : 'actual',
     name: detail1.name,
     description: detail1.description,
     price: +detail1.price,
     published: detail1.published,
     video: detail1.video,
     map: detail1.map
    }
   })).then(() =>{
    this.matSnackBar.open('Uloženo', '', {panelClass: 'successBar', duration: 2000})
   }, reason => {
    this.matSnackBar.open('Chyba', '', {panelClass: 'errorBar', duration: 2000})
    }
   )
  }
 }

 showHowToIframe() {
  this.matDialog.open(HowToIframeComponent)
 }
}
