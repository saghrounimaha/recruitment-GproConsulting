import { Component, OnInit } from '@angular/core';
import {FormationService} from "../services/formation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../services/image.service";
import {Formation} from "../modelss/formation";

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.css']
})
export class EditformationComponent implements OnInit {

  formation= new Formation();
  filesToUpload: Array<File>;
  photo;
  id;

  detaillformation;

  constructor(private  srvcformation:FormationService,private actvroute: ActivatedRoute,private imgsrc:ImageService,private router:Router) {
    this.id = this.actvroute.params['_value']['id'];
    this.getbyid(this.id)
    this.photo = "choisir une image"
  }

  ngOnInit() {
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.detaillformation.photo = file.target.files[0]['name'];
  }
  getbyid(id){
    this.srvcformation.getbyid(id).subscribe(res=>{
      this.detaillformation=res
      console.log(res)
    })
  }

  edit(){

    const data ={
      titre_Formation: this.formation.titre_Formation,
      date_Debut: this.formation.date_Debut,
      date_Fin: this.formation.date_Fin,
      discrepition: this.formation.discrepition,
      duree_Formation: this.formation.duree_Formation,
      prix_Formation: this.formation.prix_Formation,

      photo: this.filesToUpload[0].name

    }
    console.log(data)
    console.log(this.photo)
    this.srvcformation.modifier(this.id,data).subscribe(res=>{
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
