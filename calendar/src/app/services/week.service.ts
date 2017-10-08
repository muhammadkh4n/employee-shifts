import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment as ENV } from '../../environments/environment';

@Injectable()
export class WeekService {

  constructor(private http: Http) { }

  getWeek(weekDate: string) {
    return this.http.get(ENV.api+'/weeks/'+weekDate)
      .map(res => res.json());
  }

  saveWeek(week: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(ENV.api+'/weeks', week, headers)
      .map(res => res.json());
  }

  updateWeek(week: any) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(ENV.api+'/weeks/'+week.starting_date, week, headers)
      .map(res => res.json());
  }

  deleteWeek(weekDate: string) {
    return this.http.delete(ENV.api+'/weeks/'+weekDate)
      .map(res => res.json());
  }
}
