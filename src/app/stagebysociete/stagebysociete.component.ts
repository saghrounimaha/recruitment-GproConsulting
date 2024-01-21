import { Component, OnInit } from '@angular/core';
import {OffreService} from "../services/offre.service";

@Component({
  selector: 'app-stagebysociete',
  templateUrl: './stagebysociete.component.html',
  styleUrls: ['./stagebysociete.component.css']
})
export class StagebysocieteComponent implements OnInit {
listoffrebysocietes;
  constructor(private offreservice:OffreService) { }

  ngOnInit(): void {
    this.listoffrebysociete();
  }
listoffrebysociete() {
    this.offreservice.listoffrebysociete(localStorage.getItem('id')).subscribe(res => {
      console.log(res)
      this.listoffrebysocietes = res;

    })
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
