import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {gqlApi} from './home-page.api';
import {firstValueFrom, map} from 'rxjs';
import {AdvertisementHomePage} from './home-page.model';

@Injectable({
 providedIn: 'root'
})
export class HomePageService {

 private api = inject(gqlApi);

 getActualAdvertisements(): Promise<AdvertisementHomePage[]> {
  return firstValueFrom(
   this.api.getActualAdvertisements().pipe(
    map(res => res.data.advertisements.map(
     advertisement =>
      ({
       uuid: advertisement.uuid,
       name: advertisement.name,
       imageUrl: advertisement.imageUrl ? '/api/advertisement/' + advertisement.uuid + '/images/150_' + advertisement.imageUrl : ''      })
    ))))
 }

 getSoldAdvertisements(): Promise<AdvertisementHomePage[]> {
  return firstValueFrom(
   this.api.getSoldAdvertisements().pipe(
    map(res => res.data.advertisements.map(
     advertisement =>
      ({
       uuid: advertisement.uuid,
       name: advertisement.name,
       imageUrl: advertisement.imageUrl ? '/api/advertisement/' + advertisement.uuid + '/images/150_' + advertisement.imageUrl : ''
      })
    ))))
 }

}
