import {Component, OnInit} from '@angular/core';
import {OffreService} from "../services/offre.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detaillestage',
  templateUrl: './detaillestage.component.html',
  styleUrls: ['./detaillestage.component.css']
})
export class DetaillestageComponent implements OnInit {
  description;
  id;
  detaimlf;
  statu: boolean;
  affichhcommentaire = false;
  listcommentaire;

  constructor(private actvroute: ActivatedRoute, private srvcf: OffreService) {
    this.id = this.actvroute.params['_value']['id']
    console.log(this.id);
    if (localStorage.getItem("etat") != null) {
      this.statu = true
    }

  }

  ngOnInit() {
    this.getbyid(this.id);
    this.getcommaitaire();
  }

  getbyid(id) {
    this.srvcf.getbyid(id).subscribe(res => {
      console.log(res)
      this.detaimlf = res;

    })
  }

  getcommaitaire() {
    this.srvcf.listcommentaire(this.id).subscribe(res => {
      console.log(res)
      this.listcommentaire = res;

    })
  }

  clikaffiche() {
    this.affichhcommentaire = true;
  }

  ajoutercommaintaire() {
    console.log(this.description)
    this.srvcf.ajoutercommantaire(localStorage.getItem('id'),this.id, {description: this.description}).subscribe(res => {
      console.log("ajoutercommantaire", res);
      this.getcommaitaire();

    })

  }
}
