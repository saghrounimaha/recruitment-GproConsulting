import { Component, OnInit } from '@angular/core';
import {OffreService} from "../services/offre.service";
import {DemandestageService} from "../services/demandestage.service";

@Component({
  selector: 'app-listdemendestage',
  templateUrl: './listdemendestage.component.html',
  styleUrls: ['./listdemendestage.component.css']
})
export class ListdemendestageComponent implements OnInit {
  listedemndes;
  constructor(private demande:DemandestageService) {
    this.demandestagesoc()

  }

  ngOnInit() {


  }

  demandestagesoc(){
    this.demande.demandesoc(localStorage.getItem('id')).subscribe(res=>{
      this.listedemndes=res;
      console.log(this.listedemndes)
    })
  }

  supprimer(id){
    this.demande.supprimer(id).subscribe(res=>{
      console.log(res)
      this.demandestagesoc();
    });
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
