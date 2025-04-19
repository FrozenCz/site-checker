import {Component} from '@angular/core';
import {FeaturedProduct} from './featured-product/featured-prooduct.model';
import {FeaturedProductComponent} from './featured-product/featured-product.component';

@Component({
 selector: 'app-featured-products',
 standalone: true,
 imports: [
  FeaturedProductComponent
 ],
 templateUrl: './featured-products.component.html',
 styleUrl: './featured-products.component.scss'
})
export class FeaturedProductsComponent {
 products: FeaturedProduct[] = [
  {url: 'test', imageUrl: '/foto_r2.jpg',  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {url: 'test2', imageUrl: '/foto_r1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.'},
  {url: 'test2', imageUrl: '/foto.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.'},
  {url: 'test3', title: 'test', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.'},
 ];

}
