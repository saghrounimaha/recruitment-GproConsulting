import { Component, OnInit } from '@angular/core';
import {DemandeformationService} from "../services/demandeformation.service";

@Component({
  selector: 'app-listdemandeformation',
  templateUrl: './listdemandeformation.component.html',
  styleUrls: ['./listdemandeformation.component.css']
})
export class ListdemandeformationComponent implements OnInit {

  listedemndeformation;
  constructor(private demandeservice:DemandeformationService) {
    this.demandeformationcent()

  }

  ngOnInit() {
  }


  demandeformationcent(){
    this.demandeservice.demandeforma(localStorage.getItem('id')).subscribe(res=>{
      this.listedemndeformation=res;
      console.log(this.listedemndeformation)
    })
  }

  supprimer(id){
    this.demandeservice.supprimer(id).subscribe(res=>{
      console.log(res)
      this.demandeformationcent();
    });
  }
logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
}
}
