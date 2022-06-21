import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-listorders',
  templateUrl: './listorders.component.html',
  styleUrls: ['./listorders.component.scss']
})
export class ListordersComponent implements OnInit {
  public orders : any;
  public user : any;

  constructor(private orderapiService : OrderService) { }

  ngOnInit(): void {
    this.orderapiService.getOrders().subscribe((res: any) => {
      this.orders = res;
    },
    (error) => {
      console.log(error);
    });
  }

}
