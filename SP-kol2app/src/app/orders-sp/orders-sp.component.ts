import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../data.service';


@Component({
  selector: 'orders-sp',
  templateUrl: './orders-sp.component.html',
  styleUrls: ['./orders-sp.component.css']
})
export class OrdersSPComponent implements OnInit {

  @Input() filterText: string;
  @Input() id: number;
  public items$: any;

constructor(private service: DataService, private router: Router) { }

ngOnInit() {
  this.getAll();
}

getAll(){
  this.service.getAll().subscribe(response=> {this.items$ = response})
}

goToDetails(){
  this.router.navigate(['/order/items/:id']);
}

}