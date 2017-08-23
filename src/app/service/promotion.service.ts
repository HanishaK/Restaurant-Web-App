import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promo';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promotion[]{
  return PROMOTIONS;
  }

getPromotion(id: number): Promotion{
return PROMOTIONS.filter((prom) => (prom.id === id))[0];

}

getFeaturedPromotion(): Promotion{
return PROMOTIONS.filter((prom) => (prom.featured))[0];

}

}
