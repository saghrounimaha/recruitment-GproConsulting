import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponsableCentreService {

  constructor(private http: HttpClient) {
  }
  getall() {
    return this.http.get(environment.url + 'ResponsableCentre/GetAll');
  }

  register(data) {

    return this.http.post(environment.url + 'ResponsableCentre/addResponsable_CentreFormation', data);
  }
  modif(data,id){
    return this.http.put(environment.url + 'ResponsableCentre/updateResponsable_CentreFormation /'+id, data);
  }
}
