import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestHandler } from './requestHandler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService extends RequestHandler {

  constructor(http: HttpClient) {
    super(http);
  }

  getJobData(org?: string): Observable<object> {
    const params = new HttpParams().set('organization', org);
    return org !== undefined ? this.request('get', `${this.baseUrl}${this.portfolioEndpoint}/job/description`, params)
      : this.request('get', `${this.baseUrl}${this.portfolioEndpoint}/job/description`);
  }

}
