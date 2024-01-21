import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ResponsabelSocietyService} from '../../services/responsabel-society.service';
import {CandidatService} from '../../services/candidat.service';
import {ResponsableCentreService} from '../../services/responsabelcentre.service';

import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

import {AuthentificationService} from '../../services/authentification.service';
import {Router} from "@angular/router";
import {OffreService} from "../../services/offre.service";
import {FavorieService} from "../../services/favorie.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  connecter;
  ison;
  userconnete;
  choix = 'candidat';
  roleuser;
  listfavorie;

  constructor(private router: Router, private responsableCentreService: ResponsableCentreService,
              private modalService: BsModalService,
              private candudatservice: CandidatService,
              private offreService: OffreService,
              private favorieService: FavorieService,
              private formBuilder: FormBuilder, private authenService: AuthentificationService,
              private responsabelSocietyService: ResponsabelSocietyService) {
    if (localStorage.getItem('connecte') === 'true') {
      this.ison = true;
    } else {
      this.ison = false
    }
    console.log(this.ison);
    this.roleuser = localStorage.getItem("roleuser");
    console.log(this.roleuser);
  }

  ngOnInit(): void {
    this.getprofile();
    this.listefavorie();
  }

  routageprofile() {
    this.roleuser = localStorage.getItem("roleuser");
    if (this.roleuser == 'ResponsableSociete') {
      this.router.navigate(['/profileSocite'])
    }
    if (this.roleuser == 'ResponsableCentre') {
      this.router.navigate(['/profileCentre'])
    }
    if (this.roleuser == 'candidat') {
      this.router.navigate(['/profileCandidat'])
    }
  }

  getprofile() {
    this.authenService.getprofile().subscribe((res: any) => {
      console.log(res);
      this.userconnete = res;
    })
  }

  deconnecter() {
    this.authenService.logout();
    localStorage.setItem('connecte', 'false');
    if (localStorage.getItem('connecte') === 'true') {
      this.ison = true;
    } else {
      this.ison = false
    }
    console.log(this.ison)
  }

  listefavorie() {
    this.favorieService.getallbyid(localStorage.getItem('id')).subscribe((res: any) => {
      console.log("listfavorie", res);
      this.listfavorie = res;
    })
  }

}
