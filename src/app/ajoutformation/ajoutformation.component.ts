import { Component, OnInit } from '@angular/core';
import {FormationService} from "../services/formation.service";
import {ImageService} from "../services/image.service";
import {Router} from "@angular/router";
import {Formation} from "../modelss/formation";

@Component({
  selector: 'app-ajoutformation',
  templateUrl: './ajoutformation.component.html',
  styleUrls: ['./ajoutformation.component.css']
})
export class AjoutformationComponent implements OnInit {

  formation= new Formation();
  filesToUpload: Array<File>;
  photo;
  constructor(private  srvcformation:FormationService,private imgsrc:ImageService,private router:Router) {
    this.photo = "choisir une image"
  }

  ngOnInit() {
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  ajouter(){

    const data ={
      discrepition:this.formation.discrepition,
      titre_Formation:this.formation.titre_Formation,
      prix_Formation:this.formation.prix_Formation,
      duree_Formation:this.formation.duree_Formation,
      date_Debut:this.formation.date_Debut,
      date_Fin:this.formation.date_Fin,
      photo: this.filesToUpload[0].name
    }
    console.log(data)
    this.srvcformation.ajouter(localStorage.getItem('id'),data).subscribe(res=>{
      console.log(res)
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
        this.formation = new Formation();
        this.photo = "choisir une image"
        // this.router.navigate(['/centreformation'])
      })
    })
  }
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

}
