import { Component, OnInit } from '@angular/core';
import {ImageService} from "../services/image.service";
import {DemandeformationService} from "../services/demandeformation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-demandeformation',
  templateUrl: './demandeformation.component.html',
  styleUrls: ['./demandeformation.component.css']
})
export class DemandeformationComponent implements OnInit {
  filesToUpload: Array<File>;
  photo;
  idFormation;
 date;
  constructor(private imgsrc: ImageService,private srvcforma:DemandeformationService,private actvroute:ActivatedRoute,private router:Router) {
    this.idFormation = this.actvroute.params['value']['id']
    this.photo="choisir une photo"
    this.date="date"
  }

  ngOnInit() {
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  postuler(){
  const data ={
    photo: this.filesToUpload[0].name,
  }
  this.srvcforma.ajouterdemmendeforma(this.idFormation,localStorage.getItem("id"),data).subscribe(res=>{
    console.log(res)
    this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
      console.log(rest)

    })
    this.photo="choisir une photo"
    alert("votre Demaande a éte enovyer avec succée")
    // this.router.navigate(['/'])
  })
}
  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
