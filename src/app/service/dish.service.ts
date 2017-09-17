import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMessgService } from './process-httpmessg.service';

@Injectable()
export class DishService {

  constructor(private http: Http, private processHTTPMessgService: ProcessHTTPMessgService) { }

  getDishes(): Observable<Dish[]> {
     return this.http.get(baseURL + 'dishes').map(res => { return this.processHTTPMessgService.extractData(res); });
   }

  getDish(id: number): Observable<Dish> {
     return  this.http.get(baseURL + 'dishes/'+ id).map(res => { return this.processHTTPMessgService.extractData(res); });
   }

  getFeaturedDish(): Observable<Dish> {
     return this.http.get(baseURL + 'dishes?featured=true').map(res => { return this.processHTTPMessgService.extractData(res)[0]; });
   }

  getDishid(): Observable<number[]> {
  return this.getDishes().map(dishes => { return dishes.map(dish => dish.id) });
}
}
