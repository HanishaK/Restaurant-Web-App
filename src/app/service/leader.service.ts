import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMessgService } from './process-httpmessg.service';

@Injectable()
export class LeaderService {

  constructor(private http: Http, private processHTTPMessgService: ProcessHTTPMessgService) { }

  getLeaders(): Observable<Leader[]>{
  return this.http.get(baseURL + 'leaders')
  .map(res => { return this.processHTTPMessgService.extractData(res);})
  .catch(error => { return this.processHTTPMessgService.handleError(error); });
  }
  getFeaturedLeader(): Observable<Leader>{
  return this.http.get(baseURL + 'leaders?featured=true')
  .map(res => { return this.processHTTPMessgService.extractData(res)[0]; })
  .catch(error => { return this.processHTTPMessgService.handleError(error); });
  }

}
