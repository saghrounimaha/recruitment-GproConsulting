import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'offrestage/GetAlloffrestage');
  }
  ajouter(idsocity, idsecteur, data) {
    return this.http.post(environment.url + 'offrestage/addoffrestage/' + idsocity + '/' + idsecteur, data)
  }

  getallsecteur() {
    return this.http.get(environment.url + 'secteur/GetAllsecteur')
  }
  getbyid(id){
    return this.http.get(environment.url+'offrestage/getbyIdoffrestage/'+id)
  }
modifier(id,data){
  return this.http.put(environment.url+'offrestage/updateoffrestage/'+id,data)
}
  addfavorie(idoffrestage,idCandiat,data){
    return this.http.post(environment.url +'favorie/addfavorie/'+idoffrestage+'/'+idCandiat,data)
  }
 listoffrebysociete(idrsponsociete){
    return this.http.get(environment.url+'offrestage/allstagebyIdsociete/'+idrsponsociete)
  }
listcommentaire(idoffer){
   return this.http.get(environment.url+'commantaire/allbycandidat/'+idoffer);
}
  ajoutercommantaire(idcantdiat,idoffrestage,data){
    return this.http.post(environment.url+'commantaire/addCommentaire/'+idcantdiat+'/'+idoffrestage,data)
  }
}
