import {afterNextRender, ChangeDetectionStrategy, Component, inject, signal, WritableSignal} from '@angular/core';
import {AdvertisementDetailModel, DetailImage} from "./advertisement-detail.model";
import {ActivatedRoute} from "@angular/router";

import {CommonModule, NgForOf} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {firstValueFrom} from 'rxjs';
import {gqlApi} from './advertisement-detail.api';
import {Lightbox, LightboxModule} from 'ngx-lightbox';
import {DomSanitizer, SafeResourceUrl, Title} from '@angular/platform-browser';
import {GetSrcFromIframePipe} from './get-src-from-iframe.pipe';


@Component({
 selector: 'app-advertisement-detail',
 standalone: true,
 imports: [
  NgForOf,
  CommonModule,
  MatButtonModule,
  MatToolbarModule,
  LightboxModule,
  GetSrcFromIframePipe
 ],
 templateUrl: './advertisement-detail.component.html',
 styleUrl: './advertisement-detail.component.scss',
 changeDetection: ChangeDetectionStrategy.OnPush // kvuli iframe, pri fullscreenu se zmenil zpet
})
export class AdvertisementDetailComponent {
 route = inject(ActivatedRoute);
 detail: WritableSignal<AdvertisementDetailModel | undefined> = signal<AdvertisementDetailModel | undefined>(undefined)
 images: WritableSignal<DetailImage[]> = signal<DetailImage[]>([])
 api = inject(gqlApi);
 private _lightbox = inject(Lightbox);
 private sanitizer = inject(DomSanitizer);
 private titleService = inject(Title);

 constructor() {
  const uuid = this.route.snapshot.paramMap.get('uuid');

  afterNextRender(async () => {


   if (uuid) {
    const result = (await firstValueFrom(this.api.getAdvertisementDetail({id: uuid})))
    const detail = result.data?.advertisement
    this.titleService.setTitle(detail?.name)

    this.detail.set({
     name: detail.name,
     description: detail.description,
     price: detail.price,
     createdAt: new Date(detail.createdAt),
     published: detail.published,
     imageUrl: '/api/advertisement/' + detail!.uuid + '/images/400_' + detail?.imageUrl,
     video: detail?.video,
     map: detail?.map
    })
    this.images.set(detail?.advertisementImages?.map(image => ({
     src: '/api/advertisement/' + detail!.uuid + '/images/1066_' + image.imageUrl,
     thumb: '/api/advertisement/' + detail!.uuid + '/images/150_' + image.imageUrl,
     order: image.order
    })) ?? [])
   }


  })


 }


 open(index: number): void {
  // open lightbox
  this._lightbox.open(this.images(), index, {centerVertically: true});
 }

 close(): void {
  // close lightbox programmatically
  this._lightbox.close();
 }

 getSafeUrl(videoId: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
 }




}


