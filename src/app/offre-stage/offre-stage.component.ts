import { Component, OnInit } from '@angular/core';
import {OffreService} from "../services/offre.service";
import {getAllLifecycleHooks} from "@angular/compiler/src/lifecycle_reflector";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offre-stage',
  templateUrl: './offre-stage.component.html',
  styleUrls: ['./offre-stage.component.css']
})
export class OffreStageComponent implements OnInit {
  titre_offre;
liststage;
roleuser;
  constructor(private offreService: OffreService,private router:Router) {
  }

  ngOnInit(): void {
this.getAll();


  }
  getAll()
  {
    this.offreService.getall().subscribe(res=>{
      console.log(res),this.liststage=res;
    })
  }
addfavorie(idoffer)
  {
    this.offreService.addfavorie(idoffer,localStorage.getItem('id'),{datecriation:new Date()}).subscribe(res=>{
      console.log(res);
    })
  }

  routageprofile(){
    this.roleuser=localStorage.getItem("role");
    if(this.roleuser=='ResponsableSociete'){
      this.router.navigate(['/profilesocite'])
    }
    if(this.roleuser=='ResponsableCentre'){
      this.router.navigate(['/profileCentre'])
    }
    if(this.roleuser=='Candidat'){
      this.router.navigate(['/profileCandidat'])
    }
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

}
