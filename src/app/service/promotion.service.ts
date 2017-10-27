import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promo';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMessgService } from './process-httpmessg.service';

@Injectable()
export class PromotionService {

  constructor(private http: Http, private processHTTPMessgService: ProcessHTTPMessgService) { }

  getPromotions(): Observable<Promotion[]>{
  return this.http.get(baseURL + 'promotions')
  .map(res => { return this.processHTTPMessgService.extractData(res); })
  .catch(error => { return this.processHTTPMessgService.handleError(error); });
  }

getPromotion(id: number): Observable<Promotion>{
return this.http.get(baseURL + 'promotions/' + id)
.map(res => { return this.processHTTPMessgService.extractData(res); })
.catch(error => { return this.processHTTPMessgService.handleError(error); });
}

getFeaturedPromotion(): Observable<Promotion>{
return this.http.get(baseURL + 'promotions?featured=true')
.map(res => { return this.processHTTPMessgService.extractData(res)[0]; })
.catch(error => { return this.processHTTPMessgService.handleError(error); });
}

}
