import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {JwtHelperService} from '@auth0/angular-jwt';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) {
  }

  basurl = 'http://localhost:8080';
  jwt: string;
  username: string;
  roles: Array<string>;


  private var;

  login(data) {
// bech yjib lhedar de la requet post
    return this.http.post(this.basurl + '/login', data, {observe: 'response'});

  }

  getprofile() {
    //permet d'affficher le user courant
    const headers = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});
    return this.http.get('http://localhost:8080/Admin/getprofile', {headers: headers});
  }

  parseJWT() {

    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    localStorage.setItem('roleuser', this.roles[0]);
  }

  saveToken(jwt: string) {
    sessionStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }


  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }

  isCandidat() {
    return this.roles.indexOf('Candidat') >= 0;

  }

  isresponsableSociete() {
    return this.roles.indexOf('ResponsableSociete') >= 0;

  }

  isresponsableCentre() {
    return this.roles.indexOf('ResponsableCentre') >= 0;

  }

  isAuthenticated() {

    return this.roles && (this.isAdmin() || this.isCandidat() || this.isresponsableSociete() || this.isresponsableCentre());
  }

  loadToken() {
    this.jwt = sessionStorage.getItem('token');
    this.parseJWT();
  }

  logout() {
    sessionStorage.removeItem('token');
    this.initParams();

  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
}
