import { Component, OnInit } from '@angular/core';
import {FormationService} from "../services/formation.service";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
listeformation;

  constructor(private formationService:FormationService ) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll()
  {
    this.formationService.getall().subscribe(result=>{
      console.log(result),this.listeformation=result;
    })
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

}
