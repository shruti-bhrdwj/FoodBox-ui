import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import * as myjson from "src/assets/data/imgmap.json";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Output() product: any = [];
  @Output() createProduct  =  new EventEmitter<any>();
  public addForm : FormGroup;
  public image : any;
  constructor(private router : Router, private formBuilder: FormBuilder, private ProductService: ProductService) {
    this.addForm = this.formBuilder.group({
      name: ["",[Validators.required]],
      price:["",[Validators.required]],
      description:["",Validators.required],
      category:["",Validators.required],
      image:["",Validators.required],
      seller:["",Validators.required]
  });
   }

  ngOnInit(): void {
    console.log(myjson);
    this.image = myjson;
  }

  onSubmit(form : any){
    if(form.valid){
      console.log(form.value.image);
      this.ProductService.addProduct(
        {"name" : form.value.name , "price" : parseFloat(form.value.price) ,
        "description" : form.value.description , "category" : form.value.category ,
         "imagePath" : form.value.image, "seller" : form.value.seller}).subscribe((res: any) => {
        console.log(res);
        window.location.reload();
      },
      (error: any) => {
        console.log(error);
      });
    }
  }
}
