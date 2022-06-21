import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cart : any;
  public products!: any[];
  userDetials: any;

  constructor(private router : Router, private userapiService : UserService,
             private cartapiService : CartService, private productapiService : ProductService,
             private orderapiService : OrderService) { }

  ngOnInit(): void {
    this.userDetials = this.userapiService.getUser();
  }
  deleteClick(product : any){
    this.userDetials.cart =  this.userDetials.cart.filter((p: { id: any; }) => product.id != p.id)
    localStorage.setItem('userData', JSON.stringify(this.userDetials))
  }

  onOrder(){
    this.router.navigate(["/orderdetails"]);
  }

}
