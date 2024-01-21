import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {OffreService} from "../../services/offre.service";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
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



}
