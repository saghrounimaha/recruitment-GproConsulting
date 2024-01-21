import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SecteurService {
  constructor(private http: HttpClient) {
  }


  getall() {
    return this.http.get(environment.url + 'secteur/GetAllsecteur');
  }
}
