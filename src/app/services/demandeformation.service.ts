import { Injectable } from '@angular/core';

import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DemandeformationService {

  constructor(private http: HttpClient) {
  }
  getall() {
    return this.http.get(environment.url + 'Demandeformation/GetAll');
  }
  ajouterdemmendeforma(idFormation,idCandiat,data){
    return this.http.post(environment.url+'Demandeformation/adddemandeformation/'+idFormation+'/'+idCandiat,data)
  }

  supprimer(id) {
    return this.http.delete(environment.url + 'Demandeformation/deletedemendeformation/' + id)
  }
  demandeforma(idf) {
    return this.http.get(environment.url + 'Demandeformation/all/ '+ idf )
  }
}
