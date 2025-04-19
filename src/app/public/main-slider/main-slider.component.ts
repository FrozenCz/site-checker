import {ApplicationRef, ChangeDetectorRef, Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {JsonPipe, NgIf} from '@angular/common';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {first, of} from 'rxjs';

export interface imageInSlider {
 url: string;
 currentState: MainSliderState;
 urlSet: string
}

@Component({
 selector: 'app-main-slider',
 standalone: true,
 imports: [
  MatIcon,
  NgIf,
  JsonPipe
 ],
 templateUrl: './main-slider.component.html',
 styleUrl: './main-slider.component.scss',
 animations: [
  trigger('fadeImage', [
   state('prepared', style({opacity: 1, transform: 'scale(1)', zIndex: 10})),
   state('visible', style({opacity: 1, transform: 'scale(1)', zIndex: 11})),
   state('hidden', style({opacity: 0, transform: 'scale(1.2)', zIndex: 12})),
   transition('visible => hidden', animate('5s linear', keyframes([
    style({opacity: 1, transform: 'scale(1) translateX(0)', zIndex: 12, offset: 0}),
    style({ opacity: 1, transform: 'scale(1.1) translateX(-3%)', offset: 0.5, zIndex: 12 }),
    style({ opacity: 0, transform: 'scale(1.2) translateX(-5%)', offset: 1.0, zIndex: 12 })
   ]))),
   transition('hidden => prepared', animate('0s')),
   transition('prepared => visible', animate('0s ease-in-out'))
  ])
 ]
})
export class MainSliderComponent {

 imagesInSlider: imageInSlider[] = [];
 currentVisibleImageIndex: number = 0;

 @Input()
 set images(value: string[]) {
  this.imagesInSlider = value.map((image, index) => MainSliderComponent.CreateImageInSlider(image, index))
 }


 constructor(private appRef: ApplicationRef, private changeDetector: ChangeDetectorRef) {
  //
  appRef.isStable.pipe(first(isStable => isStable)).subscribe(() => {

   this.handleImageStates();

   setInterval(() => {
    this.handleImageStates();
   }, 5000);
  })


 }

 private handleImageStates(): void {
  if (this.currentVisibleImageIndex + 1 < this.imagesInSlider.length) {
   this.currentVisibleImageIndex++;
  } else {
   this.currentVisibleImageIndex = 0
  }

  this.imagesInSlider.forEach((image, index) => {

   image.currentState = MainSliderComponent.CalculateState(this.currentVisibleImageIndex, index, this.imagesInSlider.length)

  });
  this.changeDetector.detectChanges();
 }



 private static CalculateState(currentVisible: number, currentIndex: number, fieldSize: number): MainSliderState {
  // 0 0
  //1
  if(currentVisible === currentIndex) {
   return 'visible'
  }
  // 0 1-1
  if (currentVisible === currentIndex-1) {
   return 'prepared'
  }


  if (currentIndex === 0 && fieldSize === currentVisible + 1) {
   return 'prepared'
  }

    return 'hidden'
 }

 private static GetState(currentState: MainSliderState): MainSliderState {
  switch (currentState) {
   case 'prepared':
    return 'visible'
   case "visible":
    return 'hidden'
   case "hidden":
    return 'prepared'
  }
 }

 private static CreateImageInSlider(url: string, index: number): imageInSlider {

  const currentState: MainSliderState = index === 0 ? 'visible' : index === 1 ? 'prepared' : 'hidden';

  return {
   url: url + '.jpg',
   urlSet: url + '_460.jpg 460w, ' + url + '_1024.jpg 1024w',
   currentState
  }
 }
}


export type MainSliderState = 'visible' | 'hidden' | 'prepared'

