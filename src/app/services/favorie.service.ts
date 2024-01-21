import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FavorieService {

  constructor(private http: HttpClient) {

  }
  getall() {
    return this.http.get(environment.url + 'favorie/GetAll');
  }
  getallbyid(id) {
    return this.http.get(environment.url + 'favorie/allbycandidat/'+id);
  }
  addfavorie(idoffrestage,idCandiat,data){
    return this.http.post(environment.url +'favorie/addfavorie/'+idoffrestage+'/'+idCandiat,data)
  }
}
