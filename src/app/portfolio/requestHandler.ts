import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export class RequestHandler {

  baseUrl = !environment.production ? environment.apiUrl + environment.localPort : environment.apiUrl;
  portfolioEndpoint = '/api/portfolio';

  constructor(private http: HttpClient) {
  }

  request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      params: data,
    });
    return result;
  }

}
