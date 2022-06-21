import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import * as myjson from "src/assets/data/imgmap.json";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {
  @Input()
  productId!: string;
  public isDisabled : boolean = true;
  public updateProduct : any;
  public updateForm : FormGroup;
  public image : any;
  constructor(private router : Router, private formBuilder: FormBuilder,private productService : ProductService ) {
    this.updateForm = this.formBuilder.group({
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
    console.log("yesss");
    if(form.valid){
      console.log(form.value.image);
      this.productService.updateProduct({"id": this.productId,"name" : form.value.name , "price" : parseFloat(form.value.price) , "description" : form.value.description , "category" : form.value.category , "imagePath" : form.value.image, "seller" : form.value.seller}, parseInt(this.productId)).subscribe((res) => {
        console.log(res);
        window.location.reload();
      },
      (error) => {
        console.log(error);
      });
    }
  }

}
