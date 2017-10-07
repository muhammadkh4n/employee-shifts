import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment as ENV } from '../../environments/environment';

@Injectable()
export class SlotService {

  constructor(private http: Http) { }

  getSlots() {
    return this.http.get(ENV.api+'/slots')
      .map(res => res.json());
  }

  addSlot(slot: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
    return this.http.post(
      ENV.api+'/slots',
      slot,
      headers
    ).map(res => res.json());
  }

  deleteSlot(id) {
    return this.http.delete(
      ENV.api+'/slots/'+id,
    ).map(res => res.json());
  }

}
