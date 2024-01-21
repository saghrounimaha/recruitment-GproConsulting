import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DemandestageService {

  constructor(private http: HttpClient) {
  }
  getall() {
    return this.http.get(environment.url + 'DemandeStage/GetAll');
  }
  ajouterdemmende(idstage,idCandiat,data){
    return this.http.post(environment.url+'DemandeStage/adddemandestage/'+idstage+'/'+idCandiat,data)
  }
  demandesoc(idsociete) {
    return this.http.get(environment.url + 'DemandeStage/all/' + idsociete)
  }
  supprimer(id) {
    return this.http.delete(environment.url + 'DemandeStage/deletedemendestage/' + id)
  }
}
