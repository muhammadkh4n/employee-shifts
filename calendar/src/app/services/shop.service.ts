import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment as ENV } from '../../environments/environment';

@Injectable()
export class ShopService {

  constructor(private http: Http) { }

  getShops() {
    return this.http.get(ENV.api+'/shops')
      .map(res => res.json());
  }

  addShop(shop: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(
      ENV.api+'/shops',
      shop,
      headers
    ).map(res => res.json());
  }

  deleteShop(id) {
    return this.http.delete(
      ENV.api+'/shops/'+id,
    ).map(res => res.json());
  }

}
