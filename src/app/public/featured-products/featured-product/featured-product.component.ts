import {Component, Input} from '@angular/core';
import {FeaturedProduct} from './featured-prooduct.model';
import {NgIf} from '@angular/common';

@Component({
 selector: 'app-featured-product',
 standalone: true,
 imports: [
  NgIf
 ],
 templateUrl: './featured-product.component.html',
 styleUrl: './featured-product.component.scss'
})
export class FeaturedProductComponent {

 @Input() product: FeaturedProduct | null = null

}
