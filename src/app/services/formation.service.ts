import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) {
  }
  getall() {
    return this.http.get(environment.url + 'formation/GetAll');
  }
  ajouter(idcentre,data){
    return this.http.post(environment.url+'formation/add/'+idcentre,data)
  }
  getbyid(id){
    return this.http.get(environment.url+'formation/getbyId/'+id)
  }

  modifier(id,data){
    return this.http.put(environment.url+'formation/update/'+id,data)
  }
  listformabycentre(id){
    return this.http.get(environment.url+'formation/allformationbyIdCentre/'+id)
  }

}
