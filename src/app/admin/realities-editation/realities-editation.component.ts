import {AfterViewInit, Component, computed, inject, signal, WritableSignal} from '@angular/core';
import {RealitiesEditModel, RealitiesStatus} from "./realities-edit.model";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatDialog} from "@angular/material/dialog";
import {NewRealityNameComponent} from "./new-reality-name/new-reality-name.component";
import {gqlApi} from './realities-editation.api';
import {firstValueFrom, map} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
 selector: 'app-realities-editation',
 standalone: true,
 imports: [
  RouterLink,
  MatIcon
 ],
 templateUrl: './realities-editation.component.html',
 styleUrl: './realities-editation.component.scss'
})
export class RealitiesEditationComponent implements AfterViewInit {


 private realites: WritableSignal<RealitiesEditModel[]> = signal<RealitiesEditModel[]>([])

 private api = inject(gqlApi);

 // realities = computed(() => this.realites().filter(r => r.status === 'actual'));
 private route = inject(ActivatedRoute)

 soldFiIter = toSignal(this.route.data.pipe(map(data => !!data['sold'])), {initialValue: false})
 realities = computed(() =>
  this.realites().filter(r => r.status === (this.soldFiIter() ? 'sold' : 'actual')));

 protected readonly encodeURIComponent = encodeURIComponent;

 async ngAfterViewInit(): Promise<void> {
  const advertisements = (await firstValueFrom(this.api.getAdvertisementList())).data.advertisements;
  this.realites.set(advertisements.map(advertisement => ({
   uuid: advertisement.uuid,
   name: advertisement.name,
   status: advertisement.status === 'sold' ? 'sold' : 'actual',
   createdAt: new Date(advertisement.createdAt),
   price: advertisement.price,
   imageUrl: advertisement.imageUrl ?? ''
  })))
 }

}


//http://46.36.39.68:46563
// minio
