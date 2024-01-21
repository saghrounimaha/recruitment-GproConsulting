import { Component, OnInit } from '@angular/core';
import {ResponsabelSocietyService} from "../services/responsabel-society.service";
import {ImageService} from "../services/image.service";
import {AuthentificationService} from "../services/authentification.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-profilesocitee',
  templateUrl: './profilesocitee.component.html',
  styleUrls: ['./profilesocitee.component.css']
})
export class ProfilesociteeComponent implements OnInit {

  registerSocieteForm: FormGroup;
  responsablesociete;
  photo;
  submitted = false;

  filesToUpload: Array<File>;


  constructor(private imageService: ImageService, private responsableSocieteservice: ResponsabelSocietyService, private authenService: AuthentificationService, private formBuilder: FormBuilder,) {
  }



  ngOnInit(): void {
    this.registerSocieteForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      adresse: [''],
      description: [''],
      site_web: [''],

      telephone: [''],
      email: [''],

    });

    this.getprofile();
  }
  get x() {
    return this.registerSocieteForm.controls;
  }
  getprofile() {
    this.authenService.getprofile().subscribe((res: any) => {
      console.log(res);
      this.responsablesociete = res;
    })
  }
  modifprofile()
  {
    this.submitted= true;
    console.log(this.registerSocieteForm.value);

    const data = {
      nom: this.registerSocieteForm.value.nom,
      prenom: this.registerSocieteForm.value.prenom,
      email: this.registerSocieteForm.value.email,
      telephone: this.registerSocieteForm.value.telephone,
      site_web: this.registerSocieteForm.value.site_web,


      adresse: this.registerSocieteForm.value.adresse,

      photo: this.filesToUpload[0].name

    };
    this.responsableSocieteservice.modif(data,this.responsablesociete.id).subscribe(result => {
      console.log(result);
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
