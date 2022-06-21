import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forkJoin, map, mergeMap, tap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {

  public orderTotal : number;
  products: any = []
  public user : any;
  public orderForm : FormGroup;
  public displayAlert : string;
  public cart : any;
  userDetials: any;
  ProductIds: any;
  entryResult: Object;

  constructor(private formBuilder: FormBuilder,private userapiService : UserService, private orderapiService : OrderService,
     private router : Router,
     private productapiService : ProductService) {
    this.orderTotal = 0;
    this.products = [];
    this.displayAlert = "none";
    this.orderForm = this.formBuilder.group({
      address : ["",[Validators.required]],
      phoneNo : ["",[Validators.required]],

    })
   }

  ngOnInit(): void {
    this.userDetials = this.userapiService.getUser();

    this.ProductIds = this.userDetials.cart.map((product: { id: any; }) => product.id)
      this.apiCall()
    }

    apiCall() {
      const getStuffList = (id?: any) => {
        return forkJoin(
          this.ProductIds.map((id: any) => {
            return this.productapiService.getProductById(parseInt(id));
          }
          )).pipe(
            tap(entryResult => {
              this.products = entryResult;
              console.log(this.products)
            }),
            map((val :any) => {
               this.orderTotal = val.reduce((p: any, val: any) => p + val['price'],  this.orderTotal)
               console.log(this.orderTotal);
               return this.orderTotal
            })
          );
      };
      return getStuffList().subscribe(res => {
        console.log('result !!')
      })
    }


  onSubmit(form : any){
    if(form.valid){
      let orderObj = { "address" : form.value.address, "phoneNo" : form.value.phoneNo, "pid" :  this.ProductIds}; //, "user" : this.userDetials.id
      console.log(orderObj);
      this.orderapiService.addOrder(this.userDetials.id,orderObj).subscribe((res) => {
        Swal.fire("Success", "Order confirmed","success")
        this.router.navigate(["/orders"]);
        console.log("Order confirmed");
        this.userDetials.cart = []
        localStorage.setItem('userData', JSON.stringify(this.userDetials))
      })
    }
  }

  onCloseAlert(){
    this.displayAlert = "none";
  }

}
