import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promo';
import { PROMOTIONS } from '../shared/promotions';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Promise<Promotion[]>{
  return new Promise(resolve => {
  setTimeout(() => resolve(PROMOTIONS),1500);
  });
  }

getPromotion(id: number): Promise<Promotion>{
return new Promise(resolve => {
  setTimeout(() => resolve(PROMOTIONS.filter((prom) => (prom.id === id))[0]),1500);
});
}

getFeaturedPromotion(): Promise<Promotion>{
return new Promise(resolve => {
  setTimeout(() => resolve(PROMOTIONS.filter((prom) => (prom.featured))[0]),1500);
  });
}

}
