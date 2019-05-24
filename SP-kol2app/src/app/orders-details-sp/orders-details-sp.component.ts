import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'orders-details-sp',
  templateUrl: './orders-details-sp.component.html',
  styleUrls: ['./orders-details-sp.component.css']
})
export class OrdersDetailsSPComponent implements OnInit {
  public items$: any;
  id: any;


  
  constructor(private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = param;
    });
    this.dataService.getById(this.id).subscribe(res => {
      this.items$ = res;
    });
  }
}