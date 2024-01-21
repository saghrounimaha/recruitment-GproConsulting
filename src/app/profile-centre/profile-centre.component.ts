import { Component, OnInit } from '@angular/core';
import {ImageService} from "../services/image.service";
import {AuthentificationService} from "../services/authentification.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ResponsableCentreService} from "../services/responsabelcentre.service";

@Component({
  selector: 'app-profile-centre',
  templateUrl: './profile-centre.component.html',
  styleUrls: ['./profile-centre.component.css']
})
export class ProfileCentreComponent implements OnInit {


  resonsablecent;
  registerCentreForm: FormGroup;
  submitted = false;
  filesToUpload: Array<File>;
  photo;


  constructor(private imageService: ImageService, private responcentreservice: ResponsableCentreService, private authenService: AuthentificationService, private formBuilder: FormBuilder,) {
  }


  ngOnInit(): void { this.registerCentreForm = this.formBuilder.group({
    nom: [''],
    prenom: [''],
    username: [''],
    adresse: [''],
    description: [''],
    siteWeb: [''],
    telephone: [''],
    email: [''],

  });

    this.getprofile();
  }

  get v() {
    return this.registerCentreForm.controls;
  }
  getprofile() {
    this.authenService.getprofile().subscribe((res: any) => {
      console.log(res);
      this.resonsablecent = res;
    })
  }
    modifprofile()
    {
      this.submitted = true;
      console.log(this.registerCentreForm.value);

    const data = {

      nom: this.registerCentreForm.value.nom,
      prenom: this.registerCentreForm.value.prenom,
      email: this.registerCentreForm.value.email,
      telephone: this.registerCentreForm.value.telephone,
      description: this.registerCentreForm.value.description,
      siteWeb: this.registerCentreForm.value.siteWeb,

      adresse: this.registerCentreForm.value.adresse,
      photo: this.filesToUpload[0].name

    };

    this.responcentreservice.modif(data,this.resonsablecent.id ).subscribe(res => {
      console.log(res);

      this.imageService.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      })
      });
      window.location.reload();



  }


  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;
    console.log("image", this.filesToUpload)
    this.photo = file.target.files[0]['name'];
  }

  logout(){
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }
}
