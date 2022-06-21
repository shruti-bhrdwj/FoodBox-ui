import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  isAdmin;
  public searchForm!: FormGroup;
  public searchText!: string;
  public user : any ;
  public userCart : any;
  public cartProduct : any;
  public displayAlert! : string;
  public displayAlertPresent! : string;
  public products: any = [];
  @ViewChild('productsTable')
  Table!: { nativeElement: any; };
  public dataTable: any;
  productEdit: boolean = false;
  pId!: string;
  currentUser: any;

  constructor(private ProductService: ProductService, private router: Router,private userapiService :UserService, private cartapiService : CartService, private formBuilder: FormBuilder) {
    this.isAdmin =  localStorage.getItem('checkAdmin');
    this.currentUser = userapiService.getUser() || {}
    this.searchForm = this.formBuilder.group({
      search : [""]
    });
    this.searchText = "";
    this.displayAlert = "none";
    this.displayAlertPresent = "none";

  }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts(){
    this.ProductService.getProducts().subscribe(
        productData => {
          this.products = productData;
          this.dataTable = this.Table.nativeElement;
          setTimeout(()=>{this.dataTable.DataTable;}, 2000);
        }
    );
  }

  addProduct(product : any) {
    const payload = {...product}
    this.ProductService.addProduct(product).subscribe(res => {
      Swal.fire('Product Added','Product added Successfully', 'success')
    })
  }

  updateProduct(product : any) {
    const payload = {...product}
    this.ProductService.updateProduct(product,parseInt(this.pId)).subscribe(res => {
      Swal.fire('Product updated','Product updated Successfully', 'success')
    })
  }

  addNewProduct() {
    this.productEdit = true
  }

  update(id : string){
    this.pId = id;
    this.productEdit = true
  }

  delete(id : string){
    this.pId = id;
    this.ProductService.deleteProduct( parseInt(id)).subscribe((res) => {
      Swal.fire('Success','Product deleted Successfully', 'success')
      console.log(`product with id=${id} is deleted successfully`);

    })
  }

  addtoCartClick(id : string){
    this.pId = id;
    this.ProductService.getProductById(parseInt(id)).subscribe((res) => {
      this.cartProduct = res;
      console.log("cartproduct");
      console.log(this.cartProduct);
      this.currentUser['cart'].push(this.cartProduct);
      window.localStorage.setItem('userData', JSON.stringify(this.currentUser))
    },
    (error) => {
      console.log(error);
    });

  }

  onSubmit(form : any){
    if(form.valid){
      this.searchText= form.value.search;
        this.ProductService.getProductbyName(this.searchText).subscribe((res) => {
          this.products = res;
          console.log("Yesss");
          console.log(this.products);
        },
        (error) => {
          console.log(error);
          console.log("Yesss");
        }
      );
    }
  }

  onCloseAlert1(){
    console.log("onclose1");
    this.displayAlert = "none";
  }

  onCloseAlert2(){
    console.log("onclose2");
    this.displayAlertPresent = "none";
  }
}
