import { Component, OnInit } from '@angular/core';
import {DemandestageService} from "../services/demandestage.service";
import {ImageService} from "../services/image.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-demandestage',
  templateUrl: './demandestage.component.html',
  styleUrls: ['./demandestage.component.css']
})
export class DemandestageComponent implements OnInit {

  filesToUpload: Array<File>;
  photo;
  idstage;
  lettremotivation;
  constructor( private imgsrc: ImageService,private srvcstage:DemandestageService,private actvroute:ActivatedRoute,private router:Router) {
    this.idstage = this.actvroute.params['value']['id']
    this.photo="choisir une photo"
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
      lettremontivation:this.lettremotivation
    }
    this.srvcstage.ajouterdemmende(this.idstage,localStorage.getItem("id"),data).subscribe(res=>{
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
