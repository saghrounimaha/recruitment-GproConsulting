import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OffreService} from "../services/offre.service";
import {Stage} from "../modelss/stage";

@Component({
  selector: 'app-ajouterstage',
  templateUrl: './ajouterstage.component.html',
  styleUrls: ['./ajouterstage.component.css']
})
export class AjouterstageComponent implements OnInit {

  stage = new  Sta0ge();
  listsecteur;


  constructor(private srvcstage: OffreService, private  router: Router) {
  }

  ngOnInit() {
    this.getallsecteur();
  }

  getallsecteur() {
    this.srvcstage.getallsecteur().subscribe(res => {
      console.log(res);
      this.listsecteur = res;
    })
  }

  ajouter() {
    const data = {

      titre_offre: this.stage.titre_offre,
      description: this.stage.description,
      technologie: this.stage.technologie,
      type: this.stage.type,
      duree_stage: this.stage.duree_stage,
      date_debut: this.stage.date_debut,
      date_fin: this.stage.date_fin,
      nombre_stagiaire: this.stage.nombre_stagiaire
    }
    console.log(data)
    this.srvcstage.ajouter(localStorage.getItem('id'),this.stage.secteur, data).subscribe(res => {
      console.log(res)
      this.stage = new Stage()
      // this.router.navigate(['/espaceentreprise'])
    })

  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }


}
