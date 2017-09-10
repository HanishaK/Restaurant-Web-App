import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promo';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]>{
  return Observable.of(PROMOTIONS).delay(1500);
  }

getPromotion(id: number): Observable<Promotion>{
return Observable.of(PROMOTIONS.filter((prom) => (prom.id === id))[0]).delay(1500);
}

getFeaturedPromotion(): Observable<Promotion>{
return Observable.of(PROMOTIONS.filter((prom) => (prom.featured))[0]).delay(1500);
}

}
