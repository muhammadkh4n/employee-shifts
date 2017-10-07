import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment as ENV } from '../../environments/environment';

@Injectable()
export class StaffService {

  constructor(private http: Http) { }

  getStaffs() {
    return this.http.get(ENV.api+'/staffs')
      .map(res => res.json());
  }

  addStaff(staff: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    staff = {
      name: staff.name + ' - ' + staff.title
    };
    return this.http.post(
      ENV.api+'/staffs',
      staff,
      headers
    ).map(res => res.json());
  }

  deleteStaff(id) {
    return this.http.delete(
      ENV.api+'/staffs/'+id,
    ).map(res => res.json());
  }
  
}
