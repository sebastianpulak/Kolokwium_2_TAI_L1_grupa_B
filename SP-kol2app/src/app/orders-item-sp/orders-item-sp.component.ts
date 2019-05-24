import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service'

@Component({
  selector: 'orders-item-sp',
  templateUrl: './orders-item-sp.component.html',
  styleUrls: ['./orders-item-sp.component.css']
})
export class OrdersItemSPComponent implements OnInit {

  @Input() public image = '';
  @Input() public title: string;
  @Input() public id: number;
  @Input() public price: number;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
