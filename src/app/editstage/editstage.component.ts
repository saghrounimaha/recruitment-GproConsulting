import { Component, OnInit } from '@angular/core';
import {OffreService} from "../services/offre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../services/image.service";
import {Stage} from "../modelss/stage";

@Component({
  selector: 'app-editstage',
  templateUrl: './editstage.component.html',
  styleUrls: ['./editstage.component.css']
})
export class EditstageComponent implements OnInit {

  stage= new Stage();
  filesToUpload: Array<File>;
  photo;
  id;
  detailstage;
  listsecteur;


  constructor(private  srvcstage:OffreService,private actvroute: ActivatedRoute,private imgsrc:ImageService,private router:Router) {
    this.id = this.actvroute.params['_value']['id'];
    this.getbyid(this.id)
    this.photo = "choisir une image"
  }

  ngOnInit()  {
    this.getallsecteur();
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.detailstage.photo = file.target.files[0]['name'];
  }
  getbyid(id){
    this.srvcstage.getbyid(id).subscribe(res=>{
      this.detailstage=res
      console.log(res)
    })
  }
  getallsecteur() {
    this.srvcstage.getallsecteur().subscribe(res => {
      console.log(res);
      this.listsecteur = res;
    })
  }
  edit(){
    const data = {
      titre_offre: this.stage.titre_offre,
      duree_stage: this.stage.duree_stage,
      type: this.stage.type,
      technologie: this.stage.technologie,
      nombre_stagiaire: this.stage.nombre_stagiaire,
      date_debut: this.stage.date_debut,
      date_fin: this.stage.date_fin,
      description: this.stage.description,




      photo: this.filesToUpload[0].name

    };
    console.log(data)
    console.log(this.photo)
    this.srvcstage.modifier(this.id,data).subscribe(res=>{
      if (this.filesToUpload !== undefined) {

        this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
          console.log(rest);
        });
      }
    })


  }


  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

}
