import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  dish: Dish;
  dishId: number[];
  prev: number;
  next: number;

  constructor(private dishservice: DishService, private route:ActivatedRoute, private location: Location) { }

  ngOnInit() {
  this.route.params.switchMap((params: Params) => this.dishservice.getDish(+params['id']))
  .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id)});
  this.dishservice.getDishid().subscribe(dishId => this.dishId = dishId); 
  }

setPrevNext(dishnum: number){
let index = this.dishId.indexOf(dishnum);
this.prev = this.dishId[(this.dishId.length + index - 1)%this.dishId.length];
this.next = this.dishId[(this.dishId.length + index + 1)%this.dishId.length];
}

goBack(): void {
this.location.back();
}
}
