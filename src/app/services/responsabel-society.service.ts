import { Injectable } from '@angular/core';

import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ResponsabelSocietyService {

  constructor(private http: HttpClient) {
  }
  getall() {

    return this.http.get(environment.url + 'societe/GetAll');
}
  register(data) {
    return this.http.post(environment.url + 'societe/addResponsable_societe', data);
}
  modif(data,id){
    return this.http.put(environment.url + 'societe/updateResponsable_societe /'+id, data);
  }
}
