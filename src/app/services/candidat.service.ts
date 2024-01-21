import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http: HttpClient) {
  }

  getall() {
    return this.http.get(environment.url + 'Candidat/GetAllCandidat');
  }

  register(data) {
    return this.http.post(environment.url + 'Candidat/addCandidat', data);
  }
  modif(data,id){
    return this.http.put(environment.url + 'Candidat/updateCandidat/'+id, data);
  }
}
