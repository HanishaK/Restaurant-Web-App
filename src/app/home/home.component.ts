import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../service/dish.service';
import { Promotion } from '../shared/promo';
import { PromotionService } from '../service/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../service/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;
dishErrMessg: string;

  constructor(private dishservice: DishService, private promotionservice: PromotionService, private leaderservice: LeaderService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish, errmes => this.dishErrMessg = <any>errmes);
  this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion);
  this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader);

  }

}
