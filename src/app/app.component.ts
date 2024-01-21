import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {AuthentificationService} from './services/authentification.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JobGate';
  roleuser;

  constructor(private authentification: AuthentificationService, private router: Router) {
  }

  ngOnInit(): void {
    this.authentification.loadToken();
  }

}
