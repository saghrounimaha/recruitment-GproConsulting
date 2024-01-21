import { Component, OnInit } from '@angular/core';
import {FormationService} from "../services/formation.service";

@Component({
  selector: 'app-formationbycentre',
  templateUrl: './formationbycentre.component.html',
  styleUrls: ['./formationbycentre.component.css']
})
export class FormationbycentreComponent implements OnInit {

  listformbycent;
  constructor(private formationservice:FormationService) { }

  ngOnInit(): void {
    this.listformbycentre();
  }
  listformbycentre() {
    this.formationservice.listformabycentre(localStorage.getItem('id')).subscribe(res => {
      console.log(res)
      this.listformbycent = res;

    })
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

}
